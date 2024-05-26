angular.module('pharmaApp', [])
    .controller('MainController', function($http) {
        var vm = this;
        vm.data = {};
        vm.selectedMedicine = {};
        vm.selectedEmployee = {};
        vm.selectedProject = {};

        // Load data from JSON file
        $http.get('data/data.json').then(function(response) {
            vm.data = response.data;
        }).catch(function(error) {
            console.error('Error loading data:', error);
        });

        vm.showMedicineDetails = function(medicine) {
            vm.selectedMedicine = medicine;
            $('#medicineModal').modal('show');
        };

        vm.showEmployeeDetails = function(employee) {
            vm.selectedEmployee = employee;
            $('#employeeModal').modal('show');
        };

        vm.showProjectDetails = function(project) {
            vm.selectedProject = project;
            $('#projectModal').modal('show');
        };
    });


    $(document).ready(function() {
        $("a.nav-link").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
    
                var hash = this.hash;
    
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
    });

    

    