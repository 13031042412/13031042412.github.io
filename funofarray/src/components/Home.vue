<template>
    <div class="Home">
        <div class="text-center my-3">
            <h5>数组方法</h5>
            <div>
                <a
                    href="javascript:;"
                    @click="changeSelected(0, '')"
                    class="badge badge-pill mr-2"
                    :class="[selected==0? 'badge-primary':'badge-secondary']"
                >全部</a>
                <a
                    href="javascript:;"
                    @click="changeSelected(1, true)"
                    class="badge badge-pill mr-2"
                    :class="[selected==1? 'badge-primary':'badge-secondary']"
                >改变数组</a>
                <a
                    href="javascript:;"
                    @click="changeSelected(2, false)"
                    class="badge badge-pill mr-2"
                    :class="[selected==2? 'badge-primary':'badge-secondary']"
                >不改变数组</a>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th width="140">方法</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody class="small">
                            <tr
                                v-for="item in filterBy(arr, selChange)"
                                :key="item.name+'_1'"
                                @click="goDetail(item)"
                            >
                                <td class="text-success">{{item.name}}()</td>
                                <td>{{item.desc}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            selected: 0,
            selChange: "",
            arr: [
                {
                    name: "concat",
                    desc: "连接两个或更多的数组，并返回结果。",
                    change: false,
                },
                {
                    name: "copyWithin",
                    desc: "从数组的指定位置拷贝元素到数组的另一个指定位置中。",
                    change: false,
                },
                {
                    name: "entries",
                    desc: "返回数组的可迭代对象。",
                    change: false,
                },
                {
                    name: "every",
                    desc: "检测数值元素的每个元素是否都符合条件。",
                    change: false,
                },
                {
                    name: "fill",
                    desc: "使用一个固定值来填充数组。",
                    change: true,
                },
                {
                    name: "filter",
                    desc: "检测数值元素，并返回符合条件所有元素的数组。",
                    change: false,
                },
                {
                    name: "find",
                    desc: "返回符合传入测试（函数）条件的数组元素。",
                    change: false,
                },
                {
                    name: "findIndex",
                    desc: "返回符合传入测试（函数）条件的数组元素索引。",
                    change: false,
                },
                {
                    name: "forEach",
                    desc: "数组每个元素都执行一次回调函数。",
                    change: false,
                },
                {
                    name: "from",
                    desc: "通过给定的对象中创建一个数组。",
                    change: false,
                },
                {
                    name: "includes",
                    desc: "判断一个数组是否包含一个指定的值。",
                    change: false,
                },
                {
                    name: "indexOf",
                    desc: "搜索数组中的元素，并返回它所在的位置。",
                    change: false,
                },
                {
                    name: "isArray",
                    desc: "判断对象是否为数组。",
                    change: false,
                },
                {
                    name: "join",
                    desc: "把数组的所有元素放入一个字符串。",
                    change: false,
                },
                {
                    name: "keys",
                    desc: "返回数组的可迭代对象，包含原始数组的键(key)。",
                    change: false,
                },
                {
                    name: "lastIndexOf",
                    desc: "搜索数组中的元素，并返回它最后出现的位置。",
                    change: false,
                },
                {
                    name: "map",
                    desc:
                        "通过指定函数处理数组的每个元素，并返回处理后的数组。",
                    change: false,
                },
                {
                    name: "pop",
                    desc: "删除数组的最后一个元素并返回删除的元素。",
                    change: true,
                },
                {
                    name: "push",
                    desc: "向数组的末尾添加一个或更多元素，并返回新的长度。",
                    change: true,
                },
                {
                    name: "reduce",
                    desc: "将数组元素计算为一个值（从左到右）。",
                    change: false,
                },
                {
                    name: "reduceRight",
                    desc: "将数组元素计算为一个值（从右到左）。",
                    change: false,
                },
                {
                    name: "reverse",
                    desc: "反转数组的元素顺序。",
                    change: true,
                },
                {
                    name: "shift",
                    desc: "删除并返回数组的第一个元素。",
                    change: true,
                },
                {
                    name: "slice",
                    desc: "选取数组的一部分，并返回一个新数组。",
                    change: false,
                },
                {
                    name: "some",
                    desc: "检测数组元素中是否有元素符合指定条件。",
                    change: false,
                },
                {
                    name: "sort",
                    desc: "对数组的元素进行排序。",
                    change: true,
                },
                {
                    name: "splice",
                    desc: "从数组中添加或删除元素。",
                    change: true,
                },
                {
                    name: "toString",
                    desc: "把数组转换为字符串，并返回结果。",
                    change: false,
                },
                {
                    name: "unshift",
                    desc: "向数组的开头添加一个或更多元素，并返回新的长度。",
                    change: true,
                },
                {
                    name: "valueOf",
                    desc: "返回数组对象的原始值。",
                    change: false,
                },
            ],
        };
    },
    methods: {
        goDetail: function (item) {
            console.log(item.name);
            this.$router.push("/detail/" + item.name);
        },
        filterBy: function (list, value) {
            return list.filter(function (item) {
                if (value === "") {
                    return item;
                } else {
                    return item.change == value;
                }
            });
        },
        changeSelected: function (n, v) {
            var that = this;
            that.selected = n;
            that.selChange = v;
        },
    },
};
</script>