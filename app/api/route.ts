import product from "../_lib/data";

export  function GET(){
  return new Response(JSON.stringify(product))
}