/**
 * Created by tahins on 4/21/15.
 */

$(".collapse-admin-sidebar").click(function () {

    if ($(".admin-container").hasClass("admin-sidebar-collapsed")) $(".admin-container").removeClass("admin-sidebar-collapsed");
    else $(".admin-container").addClass("admin-sidebar-collapsed");

});