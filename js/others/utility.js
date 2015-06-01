/**
 * Created by tahins on 4/21/15.
 */

$(document).ready(function() {

	$(".collapse-admin-sidebar").click(function () {

	    if ($(".admin-container").hasClass("admin-sidebar-collapsed")) $(".admin-container").removeClass("admin-sidebar-collapsed");
	    else $(".admin-container").addClass("admin-sidebar-collapsed");

	});

	$(".datatable").dataTable({
		"dom": 	"<'row'<'col-sm-12'tr>>"
	});

	$(".datatable-filter").dataTable({
		"oLanguage": { "sSearch": "" },
		"dom": 	"<'row'<'col-sm-12 text-right'f>>" +
				"<'row'<'col-sm-12'tr>>"
	});

	$(".datatable-filter-info").dataTable({
		"oLanguage": { "sSearch": "" },
		"dom": 	"<'row'<'col-sm-12 text-right'f>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-2'l><'col-sm-3'i><'col-sm-7 text-right'p>>"
	});
	$(".dataTables_filter input").prop("placeholder", "Search");
	$(".dataTables_filter label").addClass("input-group");
	$(".dataTables_filter label").prepend('<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>');
	
} );