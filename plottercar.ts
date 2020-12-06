let wait = 0;
enum pen_onoff {
  下げる,
  上げる,
}
enum plotter_houkou {
    前,
    後,
    }
let cond_Distance=1;
let cond_degree=1;


//% color="#3943c6" block="ﾌﾟﾛｯﾀｰ・ｶｰVer0.96" icon="\uf1b9"

namespace eureka_plotter_car {

  //% color="#ffa800" weight=99　blockId=plotter_Distance
  //% block="進行距離調整(1→1/1000)  短く進む |%Dis| 長く進む" group="1　調整"
  //% Dis.min=-20 Dis.max=20
  export function plotter_Distance(Dis: number): void {
    cond_Distance = (1+Dis/1000);
  }

  //% color="#ffa800" weight=99　blockId=plotter_degree
  //% block="回転角度調整（1→1/1000）  少なく回転 |%Deg| 多く回転" group="1　調整"
  //% Deg.min=-20 Deg.max=20
  export function plotter_degree(Deg: number): void {
    cond_degree = (1+Deg/1000);
  }


  //% color="#3943c6" weight=71　blockId=plottercar_forward
  //% block="前へ |%F_cm| ｃｍ進む" group="3　基本の動き"

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
  //% block="後へ |%F_cm| ｃｍ進む" group="3　基本の動き"

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



  //% color="#3943c6" weight=66　blockId=plottercar_L_cycle
  //% block="左回り　角度 |%L_degree| " group="3　基本の動き"

  export function plottercar_L_cycle(L_degree: number): void {
    for (let index = 0; index < (L_degree / 360) * 512 * 1.61*cond_degree; index++) {
    led.enable(false);

      let i = 0;
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);

      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
    }
  }

  //% color="#3943c6" weight=60　blockId=plottercar_rest
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

  //% color="#3943c6" weight=64　blockId=plottercar_R_cycle
  //% block="右回り　角度 |%R_degree| " group="3　基本の動き"

  export function plottercar_R_cycle(R_degree: number): void {
    led.enable(false);

    let i = 0;

    for (let index = 0; index < (R_degree / 360) * 512 * 1.61*cond_degree; index++) {
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
      {
      }
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for (i = 0; i < 1000; i++);
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





  //% color="#009CA0" weight=90 blockId=eureka_relay block="ペン |%mode| " group="2_ペンの状態"
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

}

