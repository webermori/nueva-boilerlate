var Rep = {
     //Carregamento inicial do estado default
    initialData: function() {
        var initialStateId = 'sc';
        var initialStateId = initialStateId.toUpperCase();
        $('#'+initialStateId).addClass('is-active');
        
        $.ajax({
            url: "representantes/estado/"+ initialStateId +" #repBlock",
            success: function(result){
                $("#repResult").html(result);
                Rep.setTitle();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                let repResult = $('#repResult').html();
                if (repResult != '') {
                   Rep.getRepForm();
                }
            }
        });
    },

    setTitle: function() {
        //Pega o nome do estado no combo
        var states = document.getElementById("states");
        var stateName = states.options[states.selectedIndex].text;

        //Imprime o resultado
        let container = document.getElementById('repResult');
        $('#stateName').html(stateName);
    },

    clearStage: function() {
        $('#repBlock').remove();
    },

    //Injeta mensagem de não encontrado.
    notFound: function (){
        let repResult = $('#repResult').html();
        if (repResult != '') {
           Rep.getRepForm();
           $('#repResult').removeClass('js-loaderText');
        }
    },

    loadRepOnState: function(stateId) {
        $('.js-repLink').each(function(){
            $(this).removeClass('is-active')
        });

        $('#'+stateId).addClass('is-active');
        $('#repResult').addClass('js-loaderText');

        $.ajax({
            url: "representantes/estado/"+ stateId +" #repBlock",
            success: function(result){
                let resultContainer = $("#repResult");
                resultContainer.html(result).removeClass('js-loaderText');
                if (resultContainer.html().length == 0 ) {

                    var html = '<div class="representatives__notFound">';
                        html += '<p>Para ser atendido por um representante da CROPAC, preencha o formulário de contato, entraremos em contato o mais breve possível, ou entre em contato diretamente pelo fone (48)3466-1500.</p>';
                        html += '<div class="representatives__notFound__info">';
                        html += '<p><a href="#contato">Entre em contato</a> conosco pelo formulário abaixo.</p>';
                        html += '</div>';
                        html += '</div>';

                    resultContainer.html(html);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                Rep.notFound();
            }
        });
    },

    //Seleciona o option do combo de estados
    comboCurrentState: function(stateId) {
        $('#states').find('option').removeAttr('selected');
        $('#states').find('option[value="'+stateId+'"]').attr('selected', 'selected');
    },

    //Plugin de personalização do Scroll na lista de representantes
    getNiceScroll: function () {
        let niceScroll = require('jquery.nicescroll');
        $(".js-niceScroll").niceScroll({
            cursorcolor: "#F0660B", // change cursor color in hex 
            cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0 
            cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0 
            cursorwidth: "12px", // cursor width in pixel (you can also write "5px") 
            cursorborder: "1px solid transparent", // css definition for cursor border 
            cursorborderradius: "5px", // border radius in pixel for cursor 
            scrollspeed: 10, // scrolling speed 
            mousescrollstep: 15, 
            autohidemode: false,
            hidecursordelay: 1000,
        });
    },

    //Ação no combo de estado
    comboState: function() {
        $('#states').on('change', function(){

            let stateName = $(this).find("option:selected").text();
            let container = document.getElementById('repResult');
            $('#stateName').html(stateName);

            let id = this.value;
            Rep.loadRepOnState(id);
        });
    },

    //Container do resultado do Ajax
    getRepForm: function() {
        let repForm = $('#repForm').html();
        $('#repResult').html(repForm);    
    },

    //Ação do clique no estado
    loadRepresentatives: function() {
        $(".js-repLink").on('click', {param: this.id}, function(){
            Rep.clearStage();
            var stateId = this.id;
            //let stateId = $(this).attr('id');

            if (stateId) {
                Rep.loadRepOnState(stateId);
                Rep.comboCurrentState(stateId);
                Rep.setTitle();
            }
        });
    },

    render: function () {
        this.initialData(),
        this.getNiceScroll(),
        this.getRepForm(),
        this.loadRepresentatives(),        
        this.comboState()
    }
};

module.exports = {  
    init: Rep.render()
}
