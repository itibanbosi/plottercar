let wait = 0;
enum pen_onoff {
  下げる,
  上げる,
}
enum plotter_houkou {
    前,
    後,
    }
enum onoff {
  無効,
  有効,
}

enum houkou {
    右,
    左,
    ななめ右,
    ななめ左,
}



let cond_Distance=1;
let cond_degree=1;


//% color="#3943c6" block="ﾌﾟﾛｯﾀｰ・ｶｰVer1.0" icon="\uf1b9"

namespace eureka_plotter_car {

  //% color="#ff3d03" weight=90 blockId=auto_led_off block="ﾏｲｸﾛﾋﾞｯﾄのLEDを |%Matrix_LED| にする" group="1 初期設定"
  export function auto_led_off(Matrix_LED:onoff) {
    switch(Matrix_LED){
        case onoff.無効:
        led.enable(false);
        break;
        case onoff.有効:
        led.enable(true);
    }
  }



  //% color="#009CA0" weight=96 blockId=eureka_relay block="ペン |%mode| " group="2 ペンの状態"
  export function plottercar_pen(mode: pen_onoff) {
    if (mode == pen_onoff.下げる) {
      pins.servoWritePin(AnalogPin.P8, 0);
      basic.pause(1000);
    }
    if (mode == pen_onoff.上げる) {
      pins.servoWritePin(AnalogPin.P8, 90);
      basic.pause(100);
    }
  }

  //% color="#3943c6" weight=80　blockId=plottercar_1sou_forward
  //% block="前へ |%F_cm| ｃｍ進む" group="3　基本の動き"
    export function plottercar_1sou_forward(F_cm: number): void {
    led.enable(false);
    let i=0;
    for (let index = 0; index < (F_cm / (18.9*cond_Distance) * 512); index++) {
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 900; i++);
      {
      }
    }
  }


  //% color="#3943c6" weight=78　blockId=plottercar_1sou_back
  //% block="後ろへ |%F_cm| ｃｍ進む" group="3　基本の動き"
    export function plottercar_1sou_back(F_cm: number): void {
    led.enable(false);
    let i=0;
    for (let index = 0; index < (F_cm / (18.9*cond_Distance) * 512); index++) {

      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }    
    }
  }

/*
  //% color="#3943c6" weight=70　blockId=plottercar_forward
  //% block="（高精度）前へ |%F_cm| ｃｍ進む" group="3　基本の動き"

  export function plottercar_forward(F_cm: number): void {
    led.enable(false);
    let i=0;
    for (let index = 0; index < (F_cm / (18.9*cond_Distance) * 512); index++) {


      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);

      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
    }
  }



  //% color="#3943c6" weight=69　blockId=plottercar_back
  //% block="（高精度）後へ |%F_cm| ｃｍ進む" group="3　基本の動き"

  export function plottercar_back(F_cm: number): void {
    led.enable(false);
    let i=0;
    for (let index = 0; index < (F_cm / (18.9*cond_Distance) * 512) ; index++) {


      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }

      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
    }
  }
*/


  //% color="#3943c6" weight=76　blockId=plottercar_L_cycle
  //% block="左回り　角度 |%L_degree| " group="3　基本の動き"

  export function plottercar_L_cycle(L_degree: number): void {
    for (let index = 0; index < (L_degree / 360) * 512 * 1.62*cond_degree; index++) {
    led.enable(false);
    let i=0;
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }    




    }
  }

  //% color="#ff4940" weight=71　blockId=plottercar_rest
  //% block="停止状態（電流ＯＦＦ）" group="3　基本の動き"
  export function plottercar_frest(): void {
    led.enable(false);

    pins.digitalWritePin(DigitalPin.P3, 0);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
  }

  //% color="#3943c6" weight=74　blockId=plottercar_R_cycle
  //% block="右回り　角度 |%R_degree| " group="3　基本の動き"

  export function plottercar_R_cycle(R_degree: number): void {
    led.enable(false);

    let i = 0;

    for (let index = 0; index < (R_degree / 360) * 512 * 1.62*cond_degree; index++) {
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 900; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 900; i++);
      {
      }



   }
  }

  //% color="#3943c6" weight=55　blockId=plottercar_R_step
  //% block="右車輪　 |%R_step|ステップ |%houkou|方向" group="3　基本の動き"

  export function plottercar_R_step(R_step: number,houkou:plotter_houkou): void {
    led.enable(false);

    let i = 0;
    switch(houkou){
        case plotter_houkou.前:

        for (let index = 0; index < R_step ;  index++ ) {
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 1);
        pins.digitalWritePin(DigitalPin.P7, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 1);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 1);
        pins.digitalWritePin(DigitalPin.P6, 1);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 1);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 1);
        pins.digitalWritePin(DigitalPin.P4, 1);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 1);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 1);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 1);
        for (i = 0; i < 1000; i++);
        {
        }

    }
        return;
    case plotter_houkou.後:
        for (let index = 0; index < R_step ;  index++) {
        pins.digitalWritePin(DigitalPin.P3, 1);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 1);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 1);
        pins.digitalWritePin(DigitalPin.P4, 1);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 1);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 1);
        pins.digitalWritePin(DigitalPin.P6, 1);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 1);
        pins.digitalWritePin(DigitalPin.P7, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 1);
        pins.digitalWritePin(DigitalPin.P7, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P4, 0);
        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 1);
        for (i = 0; i < 1000; i++);
        {
        }

    }
        return;
  }
}

  //% color="#3943c6" weight=58　blockId=plottercar_L_step
  //% block="左車輪　 |%L_step|ステップ |%houkou|方向" group="3　基本の動き"

  export function plottercar_L_step(L_step: number,houkou:plotter_houkou): void {
    led.enable(false);

    let i = 0;
    switch(houkou){
        case plotter_houkou.前:
        for (let index = 0; index < L_step ;  index++) {
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 1);
        for (i = 0; i < 1000; i++);
        {
        }
    }
    return;
        case plotter_houkou.後:
        for (let index = 0; index < L_step ;  index++) {
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 1);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 1000; i++);
        {
        }
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 1);
        for (i = 0; i < 1000; i++);
        {
        }
     }
    return;
    }
  }

  //% color="#009A00" weight=40　blockId=polygon
  //% block="多角形作図 |%digree_step| 角形　一辺の長さ |%Edge_Num| cm " group="4　図形"
  export function polygon(digree_step: number,Edge_Num:number): void {

    for (let index = 0; index < digree_step; index++) {
        eureka_plotter_car.plottercar_1sou_forward(Edge_Num)
        eureka_plotter_car.plottercar_L_cycle(360/digree_step)
     }
    plottercar_frest()
    }


  //% color="#009A00" weight=39　blockId=cycle
  //% block="円の作図 直径 |%D_Num| cm " group="4　図形"
  export function cycle(D_Num:number): void {
    let cir = D_Num * 3.14
    let Foward_D =  cir/ 60
    for (let index = 0; index < 60; index++) {
        eureka_plotter_car.plottercar_1sou_forward(Foward_D)
        eureka_plotter_car.plottercar_R_cycle(360 / 60)
    }
  }


  //% color="#3943c6" weight=72　blockId=plottercar_houkou
  //% block="ほうこうを変える |%muki| へ " group="3　基本の動き"
    export function plottercar_houkou(muki: houkou): void {
        switch(muki){
            case houkou.右:
                return eureka_plotter_car.plottercar_R_cycle(90)
            case houkou.左:
                return eureka_plotter_car.plottercar_L_cycle(90);
            case houkou.ななめ右:
                return eureka_plotter_car.plottercar_R_cycle(45);
            case houkou.ななめ左:
                return eureka_plotter_car.plottercar_L_cycle(45);
        }
    }

  //% color="#ffa800" weight=20　blockId=plotter_Distance
  //% block="進行距離調整(1→1/1000)  短く |%Dis| 長く" group="5 調整"
  //% Dis.min=-30 Dis.max=30
  export function plotter_Distance(Dis: number): void {
    cond_Distance = (1+Dis/1000);
  }

  //% color="#ffa800" weight=18　blockId=plotter_degree
  //% block="回転角度調整（1→1/1000）  少なく回転 |%Deg| 多く回転" group="5 調整"
  //% Deg.min=-30 Deg.max=30
  export function plotter_degree(Deg: number): void {
    cond_degree = (1+Deg/1000);
  }

}


