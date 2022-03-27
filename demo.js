var arr1 = [{id:1, name:'a1'},{id:2,name:'a2'},{id:3,name:'a3'},{id:4,name:'a4'},{id:5, name:'a5'}],
arr2 = [{id:1, name:'a1'},{id:3,name:'a3'}]

arr1 = arr1.map((item) => ({ ...item, isChecked: true }));
arr2 = arr1.map((item) => ({ ...item, isChecked: true }));
const assign = arr1.filter((item1) =>
  arr2.filter(item => if(item.id === item1.id) console.log(item) )
);
console.log(assign)
        // let finalStates = data.filter((o1) => state?.assignedWorkers.some((o2) => o1.id == o2.id));
        // finalStates = finalStates.map((item) => ({ ...item, isChecked: true }));

        // data = data.map((item) => ({ ...item, isChecked: false }));

        // const assign = data.filter((list1) =>
        //   finalStates.some((list2) => (list2.id !== list1.id ? list2 : list1))
        // );