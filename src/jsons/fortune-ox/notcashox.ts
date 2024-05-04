export default {
   async notcash(saldo: number, cs: number, ml: number) {
      return {
         dt: {
            si: {
               wc: 0,
               ist: false,
               itw: false,
               fws: -1,
               wp: null,
               orl: [2, 3, 7, 5, 4, 3, 5, 4, 0],
               lw: null,
               irs: false,
               gwt: -1,
               fb: null,
               ctw: 0.0,
               pmt: null,
               cwc: 0,
               fstc: null,
               pcwc: 0,
               rwsp: null,
               hashr: null,
               ml: ml,
               cs: cs,
               rl: [2, 2, 5, 4, 4, 4, 6, 3, 3],
               sid: "1728101408869321217",
               psid: "1728101408869321217",
               st: 1,
               nst: 1,
               pf: 1,
               aw: 0.0,
               wid: 0,
               wt: "C",
               wk: "0_C",
               wbn: null,
               wfg: null,
               blb: saldo,
               blab: saldo,
               bl: saldo,
               tb: 0.0,
               tbb: 0.0,
               tw: 0.0,
               np: 0.0,
               ocr: null,
               mr: null,
               ge: [1, 11],
            },
         },
         err: { cd: "3202", msg: "Not enough cash.", tid: "RACEVR16" },
      }
   },
}