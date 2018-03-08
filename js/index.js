$(function () {
// banner图
    let div = $('.banner')
    let pic = $('ul.img_bbox li')
    console.log(pic);
    let left = $('.banner_left')
    let right = $('.banner_right')
    let cirs = $('.bon_bbox li')
    let n = 0
    function move() {
        n++;
        if (n >= pic.length) {
            n = 0
        }
        pic.removeClass("active").eq(n).addClass("active");
        cirs.removeClass("active").eq(n).addClass("active");
    }

    let time = setInterval(move, 2000);
    div.mouseenter(function () {
        clearInterval(time)
    })
    div.mouseleave (function () {
        time = setInterval(move, 2000)
    })
    let flag = true
    cirs.click(function () {
        let index=$(this).index();
        pic.removeClass("active").eq(index).addClass("active");
        $(".bon_bbox li").removeClass("active").eq(index).addClass("active");
        n=index
    })

    right.click(function () {
        clearInterval(time)
        move()
    })
    left.click(function () {
        clearInterval(time)
        n--;
        if (n < 0) {
            n = pic.length - 1
        }
        pic.removeClass("active").eq(n).addClass("active");
        cirs.removeClass("active").eq(n).addClass("active");
    })



// banner的侧栏选项卡
    $(".celan li").mouseenter(function () {
        let index=$(this).index();
        $(".celanyc li").removeClass("active").eq(index).addClass("active");
        $(".celan li").removeClass("active").eq(index).addClass("active");
    })
    $(".celan li").mouseleave(function () {
        let index=$(this).index();
        $(".celanyc li").filter(".active").removeClass("active");
        $(".celan li").filter(".active").removeClass("active");
    })

// 头部的购物车隐藏
    $(".toubu-yc").mouseenter(function () {
        $(".toubu-yincang").slideDown(200)
    })
    $(".toubu-yc").mouseleave(function () {
        $(".toubu-yincang").slideUp(100)
    })

// 导航
    let navb = $('.daohang-wenzi')
    let nav = $('.daohang-wenzi li');
    let list = $('.daohangyc li')
    let ycdi = $('.daohangyc')
    nav.mouseenter (function () {
        ycdi.slideDown(200)
        list.removeClass("active").eq($(this).index()).addClass("active");

    })
    navb.mouseleave( function () {
        ycdi.slideUp(200)
    })

// 选项卡
    function xxka(a,b) {
        $(a).mouseenter(function () {
            let index=$(this).index();
            $(b).removeClass("active1").eq(index).addClass("active1");
            $(a).removeClass("active1").eq(index).addClass("active1");
        })
    }

    xxka('#jjdd .header_right a', '#jjdd .dibu1 .dibu-right')
    xxka('#zhineng .header_right a', '#zhineng .dibu1 .dibu-right')
    xxka('#dapei .header_right a', '#dapei .dibu1 .dibu-right')
    xxka('#peijian .header_right a', '#peijian .dibu1 .dibu-right')
    xxka('#zhoubian .header_right a', '#zhoubian .dibu1 .dibu-right')

// 小米明星单品
    $(".jtrdanpin").click(function () {
        $('.h-dibubox .dibu:eq(0)').animate({left:-($('.h-dibubox').width())}, function () {
            $('.jtldanpin').removeClass('active')
        })
        $('.h-dibubox .dibu:eq(1)').animate( {left: 0}, function () {
            $(".jtrdanpin").addClass('active')
        })
    })
    $(".jtldanpin").click(function () {
        $('.h-dibubox .dibu:eq(1)').animate({left:$('.h-dibubox').width()}, function () {
            $('.jtldanpin').addClass('active')
        })
        $('.h-dibubox .dibu:eq(0)').animate( {left: 0}, function () {
            $(".jtrdanpin").removeClass('active')
        })
    })

})


// window.onload=function(){

//     let n=0;
//     let div=document.querySelector('.banner');
//     let banner=document.querySelectorAll('.img_bbox li');
//     let left=document.querySelector('.banner_left');
//     let right=document.querySelector('.banner_right');
//     let dian=document.querySelectorAll('.bon_bbox li');
//     function move() {
//         if(n==banner.length){
//             n=0;
//         }
//         banner.forEach(function (value,index) {
//             value.classList.remove('active');
//             dian[index].classList.remove('active');
//         })
//         banner[n].className='active';
//         dian[n].classList.add('active');
//         n++;
//     }
//     let time=setInterval(move,2000);
//     div.onmouseover=function () {
//         clearInterval(time);
//     }
//     div.onmouseout=function () {
//         time=setInterval(move,2000);
//     }
//     right.onclick=function () {
//         n++;
//         if(n==banner.length){
//             n=0;
//         }
//         banner.forEach(function (value,index) {
//             value.classList.remove('active');
//             dian[index].classList.remove('active');
//         })
//         banner[n].className='active';
//         dian[n].classList.add('active');
//     }
//     left.onclick=function () {
//         n--;
//         if(n<0){
//             n=banner.length-1;
//         }
//         banner.forEach(function (value,index) {
//             value.classList.remove('active');
//             dian[index].classList.remove('active');
//         })
//         banner[n].className='active';
//         dian[n].classList.add('active');
//     }
//     dian.forEach(function(val,ind){
//         val.onclick=function(){
//             dian.forEach(function(i,j){
//                 i.classList.remove('active')
//                 banner[n].classList.remove('active')
//             })
//             this.classList.add('active');
//             banner[ind].classList.add('active');
//             n=ind;
//         }
//     })
//     // 导航
//     let kbjdiv=document.querySelector('.daohang')
//     let kbjnav=document.querySelectorAll('.daohang a');
//     let kbjdk=document.querySelector('.hidden_nav');
//     let kbjli=document.querySelectorAll('.hidden_cen li');
//     let kbjcen=document.querySelector('.hidden_cen')
//     kbjdiv.onmouseover=function(){
//         kbjdk.classList.add('gaodu');
//     }
//     kbjdiv.onmouseout=function(){
//         kbjdk.classList.remove('gaodu');
//     }
//     kbjnav.forEach(function(val,ind){
//         val.onmouseenter=function(){
//             kbjli.forEach(function(value){
//                 value.classList.remove('blo')
//             })
//             kbjli[ind].classList.add('blo')
//         }
//         val.onmouseout=function(){
//             kbjli[ind].classList.remove('blo')
//         }
//     })
//     kbjcen.onmouseenter=function(){
//         animate(kbjcen,{height:200},300)
//     }
//     kbjcen.onmouseleave=function(){
//         animate(kbjcen,{height:0},300)
//     }

    

// // 选项卡
//     let cenav=document.querySelectorAll('.said_box li');
//     let navhid=document.querySelectorAll('.banner_xxka ul');
//     cenav.forEach(function(val,ind){
//     val.onmouseover=function(){
//         cenav.forEach(function(value,j){
//             value.classList.remove('active1')
//             navhid[j].classList.remove('active1')
//     })
//         cenav[ind].classList.add('active1')
//         navhid[ind].classList.add('active1')
//     }
//     val.onmouseout=function(){
//         navhid[ind].classList.remove('active1')
//         cenav[ind].classList.remove('active1')
//     }
//     navhid[ind].onmouseover=function(){
//         navhid[ind].classList.add('active1')
//     }
//     navhid[ind].onmouseout=function(){
//         navhid[ind].classList.remove('active1')
//     }
// })


// // 明星单品
//     let x=0;
//     let y=0;
//     let mxbig=document.querySelector('.start1');
//     let start=document.querySelectorAll('.danpin_bottom');
//     let kuan=parseInt(getComputedStyle(mxbig,null).width);
//     let mxz=document.querySelector('.jiantou1');
//     let mxy=document.querySelector('.jiantou2');

//     mxz.onclick=function(){
//         y=x-1;
//         if(y<0){
//             y=start.length-1;
//         }
//         start[y].style.left="100%";
//         animate(start[x],{left:-kuan});
//         animate(start[y],{left:0});
//         x=y;
//     }
//     mxy.onclick=function(){
//         y=x+1;
//         if(y>=start.length){
//             y=0;
//         }
//         start[y].style.left="-100%";
//         animate(start[x],{left:kuan});
//         animate(start[y],{left:0});
//         x=y;
//     }


// // 家电js
//     let xxk=document.querySelectorAll('.xxk .jiadian_right');
//     let xxx1=document.querySelectorAll('.right_title');
//    xxx1.forEach(function(val,index){
//         val.onmouseover=function(){
//             xxx1.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             val.classList.add('active');
//             xxk.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             xxk[index].classList.add('active')
//         }
//     });


// // 智能
// //   
//     let xxk1=document.querySelectorAll('.xxk1 .jiadian_right');
//     let xxx2=document.querySelectorAll('.right_title1');
//    xxx2.forEach(function(val,index){
//         val.onmouseover=function(){
//             xxx2.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             val.classList.add('active');
//             xxk1.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             xxk1[index].classList.add('active')
//         }
//     });

// // 搭配
//     let xxk3=document.querySelectorAll('.xxk3 .jiadian_right');
//     let xxx3=document.querySelectorAll('.right_title3');
//    xxx3.forEach(function(val,index){
//         val.onmouseover=function(){
//             xxx3.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             val.classList.add('active');
//             xxk3.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             xxk3[index].classList.add('active')
//         }
//     });

// // 配件
//     let xxk4=document.querySelectorAll('.xxk4 .jiadian_right');
//     let xxx4=document.querySelectorAll('.right_title4');
//    xxx4.forEach(function(val,index){
//         val.onmouseover=function(){
//             xxx4.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             val.classList.add('active');
//             xxk4.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             xxk4[index].classList.add('active')
//         }
//     });
// // 周边
//     let xxk5=document.querySelectorAll('.xxk5 .jiadian_right');
//     let xxx5=document.querySelectorAll('.right_title5');
//    xxx5.forEach(function(val,index){
//         val.onmouseover=function(){
//             xxx5.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             val.classList.add('active');
//             xxk5.forEach(function(val,index){
//                 val.classList.remove('active');
//             });
//             xxk5[index].classList.add('active')
//         }
//     });

//  // 为你推荐

//     let x1=0;
//     let y1=0;
//     let mxbig1=document.querySelector('.wntj11');
//     let start1=document.querySelectorAll('.weinituijian_bottom');
//     let kuan1=parseInt(getComputedStyle(mxbig,null).width);
//     let mxz1=document.querySelector('.wntjjt1');
//     let mxy1=document.querySelector('.wntjjt2');

//     mxz1.onclick=function(){
//         y1=x1-1;
//         if(y1<0){
//             y1=start1.length-1;
//         }
//         start1[y1].style.left="100%";
//         animate(start1[x1],{left:-kuan});
//         animate(start1[y1],{left:0});
//         x1=y1;
//     }
//     mxy1.onclick=function(){
//         y1=x1+1;
//         if(y1>=start1.length){
//             y1=0;
//         }
//         start1[y].style.left="-100%";
//         animate(start1[x1],{left:kuan});
//         animate(start1[y1],{left:0});
//         x1=y1;
//     }
// // 双轮播
// // 4k  1
//     let box=document.querySelector('.nr_list1');
//     kkkk(box);
//     function kkkk(box) {
//     let n=0;
//     let next=0
//     let list=box.querySelectorAll('.nr_list1 .abc1');
//     let cir=box.querySelectorAll('.nr_lunbo .nr_lunbo1');
//     let width=parseInt(window.getComputedStyle(box,null).width);
//     function move() {

//         next=n+1;
//         if(next>=list.length){
//             next=0;
//         }
//         list[next].style.left='100%';
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         animate(list[n],{left:-width},500);
//         animate(list[next],{left:0},500);
//         n=next;
//     }
//     let t=setInterval(move,1000);
//     box.onmouseover=function(){
//         clearInterval(t);
//     };
//     box.onmouseout=function(){
//         t=setInterval(move,2000);
//     };
//     cir.forEach(function (val,index) {
//         val.onclick=function () {
//             if(index>next){
//                 next=index;
//                 list[next].style.left='100%';
//                 animate(list[n],{left:-width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index<next){
//                 next=index;
//                 list[next].style.left='-100%';
//                 animate(list[n],{left:width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index=next){
//                 if(flag!=1){
//                     return;
//                 }
//                 flag=false;
//             }
//         }

//     })
//     document.querySelector('.nr_right').onclick=function(){
//         move();
//     };
//     document.querySelector('.nr_left').onclick=function () {
//         next=n-1;
//         if(next<0){
//             next=list.length-1;
//         }
//         list[next].style.left='-100%';
//         animate(list[n],{left:width},500);
//         animate(list[next],{left:0},500);
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         n=next;
//     }
//     }


// // 5k  2
// let box1=document.querySelector('.nr_list2');
//     kkkkk(box1);
    
//     function kkkkk(box) {
//     let n=0;
//     let next=0
//     let list=box.querySelectorAll('.nr_list2 .abc1');
//     let cir=box.querySelectorAll('.nr_lunbo .nr_lunbo1');
//     let width=parseInt(window.getComputedStyle(box,null).width);
//     function move() {

//         next=n+1;
//         if(next>=list.length){
//             next=0;
//         }
//         list[next].style.left='100%';
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         animate(list[n],{left:-width},500);
//         animate(list[next],{left:0},500);
//         n=next;
//     }
//     let t=setInterval(move,1000);
//     box.onmouseover=function(){
//         clearInterval(t);
//     };
//     box.onmouseout=function(){
//         t=setInterval(move,2000);
//     };
//     cir.forEach(function (val,index) {
//         val.onclick=function () {
//             if(index>next){
//                 next=index;
//                 list[next].style.left='100%';
//                 animate(list[n],{left:-width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index<next){
//                 next=index;
//                 list[next].style.left='-100%';
//                 animate(list[n],{left:width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index=next){
//                 if(flag!=1){
//                     return;
//                 }
//                 flag=false;
//             }
//         }

//     })
//     document.querySelector('.nr_right22').onclick=function(){
//         move();
//     };
//     document.querySelector('.nr_left22').onclick=function () {
//         next=n-1;
//         if(next<0){
//             next=list.length-1;
//         }
//         list[next].style.left='-100%';
//         animate(list[n],{left:width},500);
//         animate(list[next],{left:0},500);
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         n=next;
//     }
//     }


// // 6k   3
//     let box2=document.querySelector('.nr_list3');
//     kkkkkk(box2);
    
//     function kkkkkk(box) {
//     let n=0;
//     let next=0
//     let list=box.querySelectorAll('.nr_list3 .abc1');
//     let cir=box.querySelectorAll('.nr_lunbo .nr_lunbo1');
//     let width=parseInt(window.getComputedStyle(box,null).width);
//     function move() {

//         next=n+1;
//         if(next>=list.length){
//             next=0;
//         }
//         list[next].style.left='100%';
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         animate(list[n],{left:-width},500);
//         animate(list[next],{left:0},500);
//         n=next;
//     }
//     let t=setInterval(move,1000);
//     box.onmouseover=function(){
//         clearInterval(t);
//     };
//     box.onmouseout=function(){
//         t=setInterval(move,2000);
//     };
//     cir.forEach(function (val,index) {
//         val.onclick=function () {
//             if(index>next){
//                 next=index;
//                 list[next].style.left='100%';
//                 animate(list[n],{left:-width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index<next){
//                 next=index;
//                 list[next].style.left='-100%';
//                 animate(list[n],{left:width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index=next){
//                 // if(flag!=1){
//                 //     return;
//                 // }
//                 // flag=false;
//             }
//         }

//     })
//     document.querySelector('.nr_right33').onclick=function(){
//         move();
//     };
//     document.querySelector('.nr_left33').onclick=function () {
//         next=n-1;
//         if(next<0){
//             next=list.length-1;
//         }
//         list[next].style.left='-100%';
//         animate(list[n],{left:width},500);
//         animate(list[next],{left:0},500);
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         n=next;
//     }
//     }
//     // 7k  4
//     let box4=document.querySelector('.nr_list4');
//     kkkkkkk(box4);
    
//     function kkkkkkk(box) {
//     let n=0;
//     let next=0
//     let list=box.querySelectorAll('.nr_list4 .abc1');
//     let cir=box.querySelectorAll('.nr_lunbo .nr_lunbo1');
//     let width=parseInt(window.getComputedStyle(box,null).width);
//     function move() {

//         next=n+1;
//         if(next>=list.length){
//             next=0;
//         }
//         list[next].style.left='100%';
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         animate(list[n],{left:-width},500);
//         animate(list[next],{left:0},500);
//         n=next;
//     }
//     let t=setInterval(move,1000);
//     box.onmouseover=function(){
//         clearInterval(t);
//     };
//     box.onmouseout=function(){
//         t=setInterval(move,2000);
//     };
//     cir.forEach(function (val,index) {
//         val.onclick=function () {
//             if(index>next){
//                 next=index;
//                 list[next].style.left='100%';
//                 animate(list[n],{left:-width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index<next){
//                 next=index;
//                 list[next].style.left='-100%';
//                 animate(list[n],{left:width},500)
//                 animate(list[next],{left:0},500)
//                 cir[n].classList.remove('active');
//                 cir[next].classList.add('active');
//                 n=next;
//             }
//             if(index=next){
//                 if(flag!=1){
//                     return;
//                 }
//                 flag=false;
//             }
//         }

//     })
//     document.querySelector('.nr_right44').onclick=function(){
//         move();
//     };
//     document.querySelector('.nr_left44').onclick=function () {
//         next=n-1;
//         if(next<0){
//             next=list.length-1;
//         }
//         list[next].style.left='-100%';
//         animate(list[n],{left:width},500);
//         animate(list[next],{left:0},500);
//         cir[n].classList.remove('active');
//         cir[next].classList.add('active');
//         n=next;
//     }
//     }




// }