<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="operation">
                <h2><span v-text="$t('workshopApp.operation.detail.title')">Operation</span> {{operation.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('workshopApp.operation.date')">Date</span>
                    </dt>
                    <dd>
                        <span>{{operation.date | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('workshopApp.operation.description')">Description</span>
                    </dt>
                    <dd>
                        <span>{{operation.description}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('workshopApp.operation.amount')">Amount</span>
                    </dt>
                    <dd>
                        <span>{{operation.amount}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('workshopApp.operation.label')">Label</span>
                    </dt>
                    <dd>
                        <span v-for="(label, i) in operation.labels" :key="label.id">{{i > 0 ? ', ' : ''}}
                            <router-link :to="{name: 'LabelView', params: {labelId: label.id}}">{{label.label}}</router-link>
                        </span>
                    </dd>
                    <dt>
                        <span v-text="$t('workshopApp.operation.bankAccount')">Bank Account</span>
                    </dt>
                    <dd>
                        <div v-if="operation.bankAccount">
                            <router-link :to="{name: 'BankAccountView', params: {bankAccountId: operation.bankAccount.id}}">{{operation.bankAccount.name}}</router-link>
                        </div>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="operation.id" :to="{name: 'OperationEdit', params: {operationId: operation.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./operation-details.component.ts">
</script>
