$(document).ready(function(){
    $("#general").click(function () {
        if ($("#general_content").is(":hidden")) {
            $("#general_content").show("slow");
            $("#main_content").hide("slow");
            $("#other_content").hide("slow");
            $("#settings_content").hide("slow");
            $("#report_content").hide("slow");
            $("#help_content").hide("slow");
        }
        return false;
    });
    $("#main_block").click(function () {
        if ($("#main_content").is(":hidden")) {
            $("#main_content").show("slow");
            $("#general_content").hide("slow");
            $("#other_content").hide("slow");
            $("#settings_content").hide("slow");
            $("#report_content").hide("slow");
            $("#help_content").hide("slow");
        }
        return false;
    });
    $("#other_block").click(function () {
        if ($("#other_content").is(":hidden")) {
            $("#other_content").show("slow");
            $("#main_content").hide("slow");
            $("#general_content").hide("slow");
            $("#settings_content").hide("slow");
            $("#report_content").hide("slow");
            $("#help_content").hide("slow");
        }
        return false;
    });
    $("#settings_block").click(function () {
        if ($("#settings_content").is(":hidden")) {
            $("#settings_content").show("slow");
            $("#main_content").hide("slow");
            $("#other_content").hide("slow");
            $("#general_content").hide("slow");
            $("#report_content").hide("slow");
            $("#help_content").hide("slow");
        }
        return false;
    });
    $("#report_block").click(function () {
        if ($("#report_content").is(":hidden")) {
            $("#report_content").show("slow");
            $("#main_content").hide("slow");
            $("#other_content").hide("slow");
            $("#settings_content").hide("slow");
            $("#general_content").hide("slow");
            $("#help_content").hide("slow");
        }
        return false;
    });
    $("#help_block").click(function () {
        if ($("#help_content").is(":hidden")) {
            $("#help_content").show("slow");
            $("#main_content").hide("slow");
            $("#other_content").hide("slow");
            $("#settings_content").hide("slow");
            $("#report_content").hide("slow");
            $("#general_content").hide("slow");
        }
        return false;
    });
});
