const connection = require('../database/connection');

module.exports = {

    async list(request, response) {

        /*Paginação */
        const { page = 1} = request.query;    
         /* Contador de registros */
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) *5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf',
            'ongs.id as ong_ID',
        ]);

        //retornando a quantidade de registros no header da resposta
        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents)
    },


    async create(request, response) {
        const { title, description, value } = request.body;
        /* o request.header tem informações do cabeçalho da aplicação, ou seja:
         qual empressa tá logada, qual user está logado,
         informações do contexto da nossa requisição, autenticação, localização, etc */
        
        const ong_id = request.headers.authorization;
        
        /*como estamos inserindo um único rgistro por vez, 
         "[id]" representa a primeira posição do array recebido do insert, que é o número gerado automaticamente na tabela 'incidents' 
         */
        const [id] =  await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })


        return response.json({ id });
    },


   async delete(request, response) {
       const { id } = request.params;
       const ong_id = request.headers.authorization;

       const incident = await connection('incidents')
       .where('id', id)
       .select('ong_id')
       .first();

       if(incident.ong_id !== ong_id)
       {
           return response.status(401).json({error: 'Operation not Permitted'})
       }
        else
        {
            await connection('incidents').where('id', id).delete();
            return response.status(204).send();
        }
    },

}