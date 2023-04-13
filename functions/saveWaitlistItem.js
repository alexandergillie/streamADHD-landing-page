export async function onRequest(context) {
    // Create a prepared statement with our query
    console.log(context)
    const ps = context.env.STREAM_DB.prepare('SELECT * from waitlist');
    const data = await ps.first();
  
    return Response.json(data);
  }