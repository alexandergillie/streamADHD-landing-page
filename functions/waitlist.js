export async function onRequest(context) {
    // Create a prepared statement with our query
    console.log(context)
    try{
      const ps = context.env.STREAM_DB.prepare('SELECT * from waitlist');
      const db = context.env.STREAM_DB

      
      const data = await ps.first();
      return Response.json(data);
    }
    catch (e) {
      console.log(e)
      return Response.json(e)
    }
  
  }