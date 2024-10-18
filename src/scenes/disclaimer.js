import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text(
      `
        Sonic thuộc sở hữu của SEGA.
        Đây là một fangame do JSLegendDev tạo ra bằng cách sử dụng kiến thức từ Sonic Mania
      `,
      { font: "mania", size: 29 }
    ),
  ]);

  k.add([
    k.text("Nhấn Phím Dấu cách/Nhấp chuột/Chạm để Bắt Đầu Game", {
      font: "mania",
      size: 60,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}
