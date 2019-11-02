<template>
    <div>
        <h1>Todos</h1>
        <div class="Legend">
            <span class="lc">Click on the todo to make it complited</span>
            <span>
                <span class="incompleted"></span> = Incompleted
            </span>
            <span>
                <span class="completed"></span> = Completed
            </span>
        </div>
        <div class="todos">
            <!-- gdy używamy v-for potrzebujemy klucza każdego z obiektów -->
            <div v-for="todo in allTodos" :key="todo.id" class="todo"> 
                <!-- wąsy {{ }} do wyświetlania dynamicznych wartości  -->
                {{ todo.title }}
                <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todos",
    // actions są w methods
    methods: { 
        ...mapActions(['FetchTodos', 'deleteTodo'])
    },
    // mapGetters określa których getterów będziemy używali
    // wartości pól computed są TYLKO DO ODCZYTU
    computed: mapGetters(['allTodos']),
    created() {
        this.FetchTodos();
    }
};
</script>

<style scoped>
.lc {
    font-weight: bold;
    font-size: 20px;
}
h1 {
    text-align: center;
    margin-bottom: 1rem;
}
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px solid #1f2222;
    background: #566ebd;
    border-radius: 5px;
    position: relative;
    cursor: pointer; 
    text-align: center;
    padding: 1rem;
    font-weight: bold;
}
i {
    position: absolute;
    bottom: 20px;
    right: 10px;
    color: #130b0b;
    cursor: pointer;
}
i:hover{
    color: #cf1c1c;
}
.Legend {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-around;
    font-size: 20px;
}
.completed {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #22315f
}
.incompleted {
    display: inline-block;
    width: 20px;
    height: 20px;    
    background: #566ebd
}
@media (max-width: 600px) {
    .todos {
        grid-template-columns: 1fr;
    }
}
</style>