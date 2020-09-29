$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#nombre').val() == '' ){
            errores += '<p><i class="icon fas fa-times"></i> Escriba un nombre</p>';
            $('#nombre').css("border-bottom-color", "#F14B4B");
        } else{
            $('#nombre').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#direccion').val() == '' ){
            errores += '<p><i class="icon fas fa-times"></i> Ingrese un email</p>';
            $('#direccion').css("border-bottom-color", "#F14B4B")
        } else{
            $('#direccion').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Telefono ==============================
        if( $('#telefono').val() == '' ){
            errores += '<p><i class="icon fas fa-times"></i> Ingrese un numero de teléfono</p>';
            $('#telefono').css("border-bottom-color", "#F14B4B")
        } else{
            $('#telefono').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Asunto ==============================
        if( $('#asunto').val() == '' ){
            errores += '<p><i class="icon fas fa-times"></i> Escriba un asunto</p>';
            $('#asunto').css("border-bottom-color", "#F14B4B")
        } else{
            $('#asunto').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p><i class="icon fas fa-times"></i> Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });

        return false;
        
    });

});
