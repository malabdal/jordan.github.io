// Initializing DataTables
$(document).ready(function () {

    $('#example thead tr').clone(true).appendTo('#example thead');
    $('#example2 thead tr').clone(true).appendTo('#example2 thead');
    $('#example3 thead tr').clone(true).appendTo('#example3 thead');
    $('#example4 thead tr').clone(true).appendTo('#example4 thead');
    $('#example5 thead tr').clone(true).appendTo('#example5 thead');
    $('#example6 thead tr').clone(true).appendTo('#example6 thead');
    $('#example7 thead tr').clone(true).appendTo('#example7 thead');
    $('#example8 thead tr').clone(true).appendTo('#example8 thead');
    $('#example9 thead tr').clone(true).appendTo('#example9 thead');
    $('#example10 thead tr').clone(true).appendTo('#example10 thead');
    $('#example11 thead tr').clone(true).appendTo('#example11 thead');
    $('#example12 thead tr').clone(true).appendTo('#example12 thead');
    $('#example13 thead tr').clone(true).appendTo('#example13 thead');
    $('#example14 thead tr').clone(true).appendTo('#example14 thead');
    $('#example15 thead tr').clone(true).appendTo('#example15 thead');
    $('#example16 thead tr').clone(true).appendTo('#example16 thead');
    $('#example17 thead tr').clone(true).appendTo('#example17 thead');
    $('#example18 thead tr').clone(true).appendTo('#example18 thead');




    $('label').contents().first().remove();

    $('#example').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });

            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_national_account.txt",
        "columns": [{
                "data": "Country Name"
            },
            {
                "data": "Indicator Name"
            },
            {
                "data": "Kind of economic activity Name"
            },
            {
                "data": "Price type Name"
            },
            {
                "data": "Unit Name"
            },

            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],

    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example2').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_finance.txt",
        "columns": [{
                "data": "Indicator Name"
            },
            {
                "data": "Country Name"
            },
            {
                "data": "Unit Name"
            },
            {
                "data": "Source Name"
            },
            {
                "data": "Scale Name"
            },

            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example3').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_trade.txt",
        "columns": [{
                "data": "Reporter Name"
            },
            {
                "data": "Reporter Currency"
            },
            {
                "data": "Reporter Currency code"
            },
            {
                "data": "Partner Name"
            },
            {
                "data": "Commodity Name"
            },

            {
                "data": "Flow Name"
            },
            {
                "data": "Indicator Name"
            },
            {
                "data": "Scale Name"
            },
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example4').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_transport.txt",
        "columns": [{
                "data": "Country Name"
            },
            {
                "data": "Indicator Name"
            },
            {
                "data": "Unit Name"
            },
            {
                "data": "Scale Name"
            },
            {
                "data": "Time"
            },

            {
                "data": "Value"
            }
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example5').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_industry.txt",
        "columns": [{
                "data": "Country Name"
            },
            {
                "data": "Country Currency"
            },
            {
                "data": "Country Currency code"
            },
            {
                "data": "Indicator Name"
            },
            {
                "data": "Industry Name"
            },
            {
                "data": "ISIC Revision Name"
            },
            {
                "data": "Unit Name"
            },
            {
                "data": "Data Supplier"
            },
            {
                "data": "Data Source"
            },
            {
                "data": "Deviation from ISIC"
            },
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example6').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_cpi.txt",
        "columns": [{
                "data": "Country Name"
            }, 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "CPI groups Name"
            }, 
            {
                "data": "CPI groups Original name"
            }, 
            {
                "data": "Unit Name"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example7').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_icp.txt",
        "columns": [{
                "data": "Country Name"
            }, 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "Level Name"
            }, 
            {
                "data": "Referance Currency Name"
            }, 
            {
                "data": "Scale Name"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example8').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/economic_gems.txt",
        "columns": [{
                "data": "Country Name"
            }, 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "Unit Name"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example9').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/social_population.txt",
        "columns": [{
                "data": "Indicator Name"
            }, 
            {
                "data": "Country Name"
            },
            {
                "data": "Nationality Name"
            },
            {
                "data": "Area Name"
            },
            {
                "data": "Age Name"
            },
            {
                "data": "Sex Name"
            },
            {
                "data": "Causes of death Name"
            },
            {
                "data": "Marital status Name"
            },
            {
                "data": "Scale Name"
            },
            {
                "data": "Source"
            },
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example10').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/social_household_budget.txt",
        "columns": [{
                "data": "Indicator Name"
            }, 
            {
                "data": "Country Name"
            },
            {
                "data": "Age Name"
            },
            {
                "data": "Area Name"
            },
            {
                "data": "Nationality Name"
            },
            {
                "data": "Sex Name"
            },
            {
                "data": "Types of products/services Name"
            },
            {
                "data": "Quintile Name"
            },
            {
                "data": "Scale Name"
            },
            {
                "data": "Source"
            },
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example11').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/social_health.txt",
        "columns": [{
                "data": "Indicator Name"
            }, 
            {
                "data": "Country Name"
            },
            {
                "data": "Age Name"
            },
            {
                "data": "Area Name"
            },
            {
                "data": "Nationality Name"
            },
            {
                "data": "Sex Name"
            },
            {
                "data": "Immunization Name"
            },
            {
                "data": "Contraception method Name"
            },
            {
                "data": "Scale Name"
            },
            {
                "data": "Source"
            },
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example12').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/social_education.txt",
        "columns": [{
                "data": "Indicator Name"
            }, 
            {
                "data": "Country Name"
            },
            {
                "data": "Age Name"
            },
            
            {
                "data": "Nationality Name"
            },
            {
                "data": "Sex Name"
            },
            {
                "data": "Education level Name"
            },
            {
                "data": "Sector Name"
            },
            
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example13').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/social_labor.txt",
        "columns": [{
                "data": "Indicator Name"
            }, 
            {
                "data": "Country Name"
            },
            {
                "data": "Area Name"
            },
            {
                "data": "Age Name"
            },
            {
                "data": "Sex Name"
            },
            {
                "data": "Nationality Name"
            },
            {
                "data": "Economic activity Name"
            },
            {
                "data": "Economic sector Name"
            },
            {
                "data": "Employment status Name"
            },
            {
                "data": "Main occupation Name"
            },
            {
                "data": "Reasons for inactivity Name"
            },
            {
                "data": "Scale Name"
            },
            {
                "data": "Source"
            },
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example14').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/environment.txt",
        "columns": [{
                "data": "Country Name"
            }, 
            {
                "data": "Country Currency"
            }, 
            {
                "data": "Country Currency code"
            }, 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "Unit Name"
            }, 
            {
                "data": "Scale Name"
            }, 
            {
                "data": "Source"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
            
            
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


     // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example15').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/energy.txt",
        "columns": [ 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "Unit Name"
            }, 
            {
                "data": "Country Name"
            }, 
            {
                "data": "Country Currency"
            }, 
            {
                "data": "Country Currency code"
            },
            {
                "data": "Scale Name"
            }, 
            {
                "data": "Source"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
            
            
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });


     // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example16').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/disability.txt",
        "columns": [ 
            {
                "data": "Country Name"
            }, 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "Activity Name"
            }, 
            {
                "data": "Age Name"
            }, 
            {
                "data": "Cause of disability Name"
            }, 
            {
                "data": "Chapter Name"
            }, 
            {
                "data": "Disability status Name"
            }, 
            {
                "data": "Education attainment Name"
            }, 
            {
                "data": "Education level Name"
            }, 
            {
                "data": "Employment status Name"
            }, 
            {
                "data": "Functional disability domain Name"
            }, 
            {
                "data": "House ownership Name"
            }, 
            {
                "data": "Household size Name"
            }, 
            {
                "data": "Household type Name"
            }, 
            {
                "data": "Literacy Name"
            }, 
            {
                "data": "Living arrangement Name"
            }, 
            {
                "data": "Living place Name"
            }, 
            {
                "data": "Location Name"
            }, 
            {
                "data": "Marital status Name"
            }, 
            {
                "data": "Occupation Name"
            }, 
            {
                "data": "School attendance Name"
            }, 
            {
                "data": "Sector Name"
            }, 
            {
                "data": "Severity Name"
            }, 
            {
                "data": "Sex Name"
            }, 
            {
                "data": "Type of disability Name"
            }, 
            {
                "data": "Unemployment status Name"
            }, 
            {
                "data": "Scale Name"
            }, 
            {
                "data": "Source"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
            
            
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    $('#example17').DataTable({

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });

            });


            $('input')
                .attr('class', 'form-control rounded')
                .attr('placeholder', 'Search by indicators and keywords')
                .attr('style', 'margin: 10px 0px');
        },

        "ajax": "./data/sdg.txt",
        "columns": [ 
            {
                "data": "Country Name"
            }, 
            {
                "data": "Goal Name"
            }, 
            {
                "data": "Indicator number Name"
            }, 
            {
                "data": "Indicator Code"
            }, 
            {
                "data": "Indicator Name"
            }, 
            {
                "data": "Activity Name"
            }, 
            {
                "data": "Age Name"
            }, 
            {
                "data": "Composite breakdown Name"
            }, 
            {
                "data": "Custom breakdown Name"
            }, 
            {
                "data": "Disability status Name"
            }, 
            {
                "data": "Education level Name"
            }, 
            {
                "data": "Data frequency Name"
            }, 
            {
                "data": "Geo info type Name"
            }, 
            {
                "data": "Income wealth quantile Name"
            }, 
            {
                "data": "Nature Name"
            }, 
            {
                "data": "Observation status Name"
            }, 
            {
                "data": "Occupation Name"
            }, 
            {
                "data": "Product Name"
            }, 
            {
                "data": "Reporting type Name"
            }, 
            {
                "data": "Sex Name"
            }, 
            {
                "data": "Unit measure Name"
            }, 
            {
                "data": "Unit multiplier Name"
            }, 
            {
                "data": "Urbanisation Name"
            }, 
            {
                "data": "Scale Name"
            }, 
            {
                "data": "Comment_obs"
            }, 
            {
                "data": "Upper bound"
            }, 
            {
                "data": "Lower bound"
            }, 
            {
                "data": "Source detail"
            }, 
            {
                "data": "Geo info url"
            }, 
            {
                "data": "Custom breakdown label"
            }, 
            {
                "data": "Date last update"
            }, 
            {
                "data": "Time"
            }, 
            {
                "data": "Value"
            }
   
           
        ],

        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 40,
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        autoWidth: true,
        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ],
    });



});