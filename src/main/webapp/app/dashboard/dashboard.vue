<template>
    <div>
        <b-alert :show="dismissCountDown"
                 dismissible
                 :variant="alertType"
                 @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <h1>My Dashboard:</h1>
        <br>
        <h2>Accounts:</h2>
        <div class="table-responsive" v-if="bankAccounts">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('workshopApp.bankAccount.name')">Name</span></th>
                    <th><span v-text="$t('workshopApp.bankAccount.balance')">Balance</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="bankAccount in bankAccounts" :key="bankAccount.id">
                    <td><router-link :to="{name: 'BankAccountView', params: {bankAccountId: bankAccount.id}}">{{bankAccount.name}}</router-link></td>
                    <td>{{bankAccount.balance}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <br>
        <h3>Operations:</h3>
        <div class="table-responsive" v-if="operations">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('workshopApp.operation.date')">Date</span></th>
                    <th><span v-text="$t('workshopApp.operation.description')">Description</span></th>
                    <th><span v-text="$t('workshopApp.operation.amount')">Amount</span></th>
                    <th><span v-text="$t('workshopApp.operation.bankAccount')">Bank Account</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="operation in operations" :key="operation.id">
                    <td>{{operation.date | formatDate}}</td>
                    <td>{{operation.description}}</td>
                    <td>{{operation.amount}}</td>
                    <td>
                        <span v-if="operation.bankAccount">{{operation.bankAccount.name}}</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="ts" src="./dashboard.component.ts"></script>
