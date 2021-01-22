const { query } = require('faunadb');

var faunadb = require('faunadb'),
  q = faunadb.query;

(async()=>{
    var adminClient = new faunadb.Client({ secret: 'fnAEAHrqF6ACBeGJZXtaOuEAUHnS2nVtVVdrGUZZ' });

    try{
        const result = await adminClient.query(

            // q.CreateDatabase({ name: 'tempdb' })

            // q.CreateKey({
            //     database: q.Database('tempdb'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'messages' })

            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            //   })

            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: 'I am fine!'} },
            //   )


            // q.Map(
            //     [
            //       'This is message 1',
            //       'Message 2',
            //       'Reply for message 1 & 2',
            //     ],
            //     q.Lambda(
            //       'detail',
            //       q.Create(
            //         q.Collection('messages'),
            //         { data: { title: q.Var('detail') } },
            //       )
            //     ),
            //   )

            // q.Get(q.Ref(q.Collection('messages'), '288367770938114565'))

            // q.Get(q.Match(q.Index('detail_by_title'), "I am fine!"))

            // q.Update(
            //     q.Ref(q.Collection('messages'), '288367770938114565'),
            //     { data: { detail: "I am sick!" } },
            //   )

            // q.Replace(
            //     q.Ref(q.Collection('messages'), '288367770938114565'),
            //     { data: { detail: "I am Good Now!" } },
            //   )

            q.Delete(
                q.Ref(q.Collection('messages'), '288367770938114565')
              )

          );
        console.log(result);
    } catch(err){
        console.log(err);
    }

})();