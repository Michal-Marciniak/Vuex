<template>
    <div class="add">
        <h3>Add Todos</h3>
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Sumbit">
            </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
            this.title='';
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}
input[type="text"] {
    flex: 10;
    background: #e8eeee;
    color: rgb(36, 32, 32);
    padding: 10px;
    border: 1px solid #292727;
}
input[type="submit"] {
    flex: 2;
    background: #807470;
    color: black;
    border: 1px solid #292727;
    cursor: pointer;
    font-weight: bold;
}
input[type="submit"]:hover {
    background: #968d8d;
}
</style>