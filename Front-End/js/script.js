
$("#inputNPedido").keydown(function(e){
    
        if(e.keyCode == 13 || e.keyCode == 9){
            let q = $("#inputNPedido").val();
            busca(q)
        e.preventDefault();
        }
})


async function busca(param){

axios.get(
    `http://localhost:3001/pedidosapi/${param}`,
    {}
    )
    .then(function(response){
        console.log(response.data)
        $("#inputCliente").val(response.data[0].CodigoCliente);
        $("#inputFantasia").val(response.data[0].RazaoCliente);
        $("#inputFPg").val(response.data[0].ModalidadeCB);
        $("#inputFP").val(response.data[0].FormaParcelamento);
        $("#inputVendedor").val(response.data[0].Vendedor);
        $("#inputCliente").val(response.data.CodigoCliente);
        $("#inputCliente").val(response.data.CodigoCliente);
        $("#inputCliente").val(response.data.CodigoCliente);

     




        document.getElementById('inputDataHora').innerHTML = response.data[0].data

      })

    }