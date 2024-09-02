import techBooks from "../_lib/data";

export  function GET(){
  return new Response(JSON.stringify(techBooks))
}