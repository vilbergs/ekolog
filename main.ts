const kv = await Deno.openKv()

interface LogEntry {
  id: string
  data: string
  timestamp: number
}

const handler = async (request: Request): Promise<Response> => {
  const headers = new Headers({ 'Access-Control-Allow-Origin': '*' })

  const data = await request.text()

  console.log(data, '\r\n')

  const id = crypto.randomUUID()
  const timestamp = Date.now()

  const entry: LogEntry = {
    id,
    data,
    timestamp,
  }

  await kv.set([id], entry)

  return new Response(null, { status: 200, headers })
}

const port = Number(Deno.env.get('PORT')) || 8080

Deno.serve({ port }, handler)
