package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Operation;
import com.mycompany.myapp.repository.BankAccountRepository;
import com.mycompany.myapp.repository.OperationRepository;
import com.mycompany.myapp.web.rest.vm.DashboardVM;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class DashboardResource {

    private BankAccountRepository bankAccountRepository;

    private OperationRepository operationRepository;

    public DashboardResource(BankAccountRepository bankAccountRepository, OperationRepository operationRepository) {
        this.bankAccountRepository = bankAccountRepository;
        this.operationRepository = operationRepository;
    }

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardVM> getDashboard() {
        DashboardVM dashboardVM = new DashboardVM();

        // Add user's bank accounts
        dashboardVM.setBankAccounts(bankAccountRepository.findByUserIsCurrentUser());

        // Add user's operations
        List<Operation> operations = operationRepository.findAll().stream()
            .filter(operation -> dashboardVM.getBankAccounts().contains(operation.getBankAccount()))
            .collect(Collectors.toList());
        dashboardVM.setOperations(operations);

        return ResponseEntity.ok(dashboardVM);
    }

}
