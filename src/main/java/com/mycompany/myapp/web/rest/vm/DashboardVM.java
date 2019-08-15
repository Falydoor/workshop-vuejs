package com.mycompany.myapp.web.rest.vm;

import com.mycompany.myapp.domain.BankAccount;
import com.mycompany.myapp.domain.Operation;

import java.util.List;

public class DashboardVM {
    private List<BankAccount> bankAccounts;

    private List<Operation> operations;

    public List<BankAccount> getBankAccounts() {
        return bankAccounts;
    }

    public void setBankAccounts(List<BankAccount> bankAccounts) {
        this.bankAccounts = bankAccounts;
    }

    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }
}
