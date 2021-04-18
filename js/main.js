 
function fillActions() {
    let job = $("#job_selected").val()
    let combo = $("#combo_selected").val()
    let l = Object.keys(actions[job][combo]).length
    if (combo == '重置') {
        fillReset()
    } else if (l == 2){
        $("#special_parser").addClass("d-none")
        $("#normal_parser").removeClass("d-none")
        // $("#action_3").addClass("d-none")
        // $("#label_action_3").addClass("d-none")
        fillNormal(job, combo)
    } else {
        $("#special_parser").addClass("d-none")
        $("#normal_parser").removeClass("d-none")
        // $("#action_3").removeClass("d-none")
        // $("#label_action_3").removeClass("d-none")
        fillNormal(job, combo)
        if (jQuery.inArray(combo, changeWithBuff) != -1) {
            $("#label_action_3").val('Buff')
        }
    }
}

function fillNormal(job, combo) {
    for (let i=1; i<7; i++) {
        $(`#action_${i}`).addClass("d-none")
        $(`#label_action_${i}`).addClass("d-none")
    }
    for (let i in actions[job][combo]) {
        $(`#${i}`).removeClass("d-none")
        $(`#label_${i}`).removeClass("d-none")
        $(`#${i}`).val(actions[job][combo][i])
    }
    $("#combo").val(combo)
}   

function fillReset() {
    $("#special_parser").removeClass("d-none")
    $("#normal_parser").addClass("d-none")
}


function parseCombo() {
    let job = $("#job_selected").val()
    let combo = $("#combo_selected").val()
    var isSpecial = jQuery.inArray(combo, Object.keys(special))
    
    if (combo == '重置') {
        parseReset()
        return
    }else if (isSpecial != -1){
        var path = 'templates/' + special[combo]
    } else if (jQuery.inArray(combo, changeWithBuff) != -1) {
        var path = 'templates/changewithbuff.xml'
    } else if (jQuery.inArray(combo, changeWithCD) != -1) {
        var path = 'templates/changewithcd.xml'
    } else {
        let l = Object.keys(actions[job][combo]).length
        var path = `templates/combo${l}stage.xml`
    }
    parseNormal(job, combo, path)
}


async function parseNormal(job, combo, path) {
    let template = await fetch(path).then(response => response.text())
    var settings = {}
    for (let i in actions[job][combo]) {
        settings[i] = actions[job][combo][i]
        let s = combo + '-' + settings[i]
        settings[`id_${i}`] = $.md5(s)
    }
    settings['combo'] = $("#combo").val()
    settings['id_combo'] = $.md5(combo)
    settings['position'] = $("#pos_1").val() + ' ' + $("#pos_2").val()
    if ($('#is_corss_true').prop('checked')) {
        settings['is_cross'] = 'c'
    } else {
        settings['is_cross'] = ''
    }
    for (key in settings){
        template = template.replace(new RegExp(`%${key}%`,'g'), settings[key])
    }
    $("#trigger_output").val(template)

}   

async function parseReset() {
    var settings = {}
    let template = await fetch('templates/reset.xml').then(response => response.text())
    if ($('#is_corss_true_reset').prop('checked')) {
        settings['is_cross'] = 'c'
    } else {
        settings['is_cross'] = ''
    }
    // settings['pos_back'] = $('#pos_back').val()
    // settings['pos_current'] = $('#pos_current').val()
    for (key in settings){
        template = template.replace(new RegExp(`%${key}%`,'g'), settings[key])
    }
    // console.log(settings)
    $("#trigger_output").val(template)
}

function refreshJob() {
    $("#job_selected").empty()
    for (let job in actions) {
        $("#job_selected").append(`<option>${job}</option>`)
    }
    refreshCombo()
}

function refreshCombo() {
    $("#combo_selected").empty()
    let job = $('#job_selected').val()
    for (let combo in actions[job]) {
        $("#combo_selected").append(`<option>${combo}</option>`)
    }
    fillActions()
}



$(document).ready(function(){
    refreshJob()
})

$(document).on("change", "#job_selected", function () {
    refreshCombo()
})

$(document).on("change", "#combo_selected", function () {
	fillActions()
})

$(document).on("click", "#clipboard_button", function () {
	copyText = document.getElementById("trigger_output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
})



$(document).on("click", "#generate_button", function () {
	parseCombo()
})