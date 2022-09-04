/*
    此处可以正常打印 parent 的值，
    因为ES6在预处理阶段加载子模块文件，
    在连接阶段已经初始化并在评估阶段赋值过，
    起到变量提升的效果。
 */
console.log(parent);
import { parent } from './parent.js';  // 子模块先于父模块被执行，因此此处会报错