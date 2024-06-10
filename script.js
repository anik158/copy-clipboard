$(document).ready(()=>{

    function add(){
        $('.copied').addClass("bounce-effect");
    }

    function remove(){
        $('.copied').removeClass("bounce-effect");
    }

    $(".copy-btn").click(()=>{
        $("#textArea").select();
        document.execCommand("copy");
        add();
        setTimeout(remove,800);
    });
});