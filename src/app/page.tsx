"use client";

import Header from "@components/Header";
import TripleArrowDown from "@components/TripleArrowDown";
import Footer from "@components/Footer";

import logo from "@/assets/images/Subtract.svg";
import dashboard from "@/assets/images/dashboard.svg";

import pix from "@/assets/icons/pix.svg";
import card from "@/assets/icons/card.svg";
import bankSlip from "@/assets/icons/bank-slip.svg";

//@ts-ignore
import Fade from "react-reveal/Fade";

//@ts-ignore

import HeadShake from "react-reveal/HeadShake";
import GetStartedLink from "@/components/GetStartedLink";
import { BadgeAnimatedBorder } from "@/components/BadgeAnimatedBorder";
import { ButtonAnimatedBorder } from "@/components/ButtonAnimatedBorder";
import { CardRevealedPointer } from "@/components/CardRevealedPointer";
import { CardBackgroundShine } from "@/components/CardbackgroundShine";

export default function Home() {
  return (
    <main className="lp-scrollbar h-screen w-screen overflow-x-hidden bg-background pb-32 ">
      <Header />

      <div className="h-full w-full px-8 md:px-8 lg:px-32  2xl:px-64 ">
        <section className="mt-8 flex w-full flex-col items-center gap-16 md:mt-32 md:flex-row   ">
          <Fade left>
            <div className="flex w-full flex-col   md:items-center  ">
              <section className="md: flex justify-center">
                <ButtonAnimatedBorder>
                  IMPULSIONE SEU NEGÓCIO COM A MEEXPAY
                </ButtonAnimatedBorder>
              </section>

              <h1 className="font-inter mt-4  bg-gradient-to-b from-white to-neutral-700 bg-clip-text text-center  text-[2.5rem] font-semibold leading-[4.5rem] text-transparent  md:text-center md:text-[3.3rem] ">
                Venda rápido, venda seguro.
              </h1>
              <span className="mt-4 inline-flex max-w-[50rem] animate-text-gradient  bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-center text-[1.125rem] font-medium text-transparent md:text-center">
                Sem saques travados, sem burocracia. As menores taxas do mercado
                para produtores e afiliados. Venda seu produto fisico ou
                digital.
              </span>
              <h4 className="mt-4 text-center text-[1.125rem] text-slate-100 md:text-right"></h4>

              <section>
                <GetStartedLink variant="button" />
              </section>
            </div>
          </Fade>
        </section>
        <section className="mt-20 flex w-full flex-col-reverse items-center gap-16 md:mt-40 md:flex-row">
          {/* <div className="rounded-lg border border-border p-1 md:w-1/2 ">
            <img src={dashboard.src} className="" />
          </div> */}

          <Fade right>
            <div className="flex w-full flex-col items-center justify-center ">
              <h2 className="font-inter mt-4 text-center text-4xl font-semibold leading-[4.5rem] text-slate-100 md:text-left ">
                Por que Meexpay?
              </h2>

              <div className="mt-4 flex flex-wrap justify-center gap-8">
                <CardBackgroundShine>
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Checkout de alta conversão{" "}
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400">
                    Checkout de alta conversão feito para você escalar a sua
                    operação.
                  </p>
                </CardBackgroundShine>
                <CardBackgroundShine>
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Sem análise de produto
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400">
                    Cadastre e venda qualquer produto sem análise burocrática.
                  </p>
                </CardBackgroundShine>

                <CardBackgroundShine>
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Saques rápidos
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400">
                    Receba suas comissões sem impactar seu fluxo de caixa,
                    saques em até 2 horas.
                  </p>
                </CardBackgroundShine>
                <CardBackgroundShine>
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Praticidade
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400">
                    Crie seu produto e comece a vender em minutos.
                  </p>
                </CardBackgroundShine>
                <CardBackgroundShine>
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Intuitivo
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400">
                    Painel de controle intuitivo e fácil de usar, para qualquer
                    um.
                  </p>
                </CardBackgroundShine>
                <CardBackgroundShine>
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Métricas
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400">
                    Acompanhe suas vendas e comissões em tempo real, e de forma
                    detalhada.
                  </p>
                </CardBackgroundShine>
              </div>

              {/* <GetStartedLink variant="link" /> */}
            </div>
          </Fade>
        </section>
        <section className="md mt-32 flex flex-col  items-center ">
          <Fade right>
            <div className="flex flex-col md:max-w-[30rem]">
              <h2 className="font-inter mt-4 text-center text-4xl font-semibold leading-[4.5rem] text-slate-100 md:text-right ">
                Prazos
              </h2>
            </div>
          </Fade>

          <div
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(19, 31, 51, 0.60) 0%, rgba(19, 30, 49, 0.00) 100%)",
            }}
            className="ml-8  mt-4 flex w-full flex-col items-center justify-center  gap-8 md:flex-row"
          >
            <CardRevealedPointer>
              <div className=" flex w-full flex-col gap-6 rounded-xl p-6 md:w-[20rem]">
                <section className="flex items-center gap-4">
                  <div className="flex max-w-max rounded-lg border border-border p-2">
                    <img src={pix.src} />
                  </div>

                  <span className="font-normal text-slate-100 ">
                    Para vendas no{" "}
                    <span className="font-medium text-white">PIX,</span> até:
                  </span>
                </section>

                <span className="text-[2.5rem] font-semibold text-white">
                  D+0
                </span>
              </div>
            </CardRevealedPointer>

            <CardRevealedPointer>
              <div className=" flex w-full flex-col gap-6 rounded-xl p-6 md:w-[20rem]">
                <section className="flex items-center gap-4">
                  <div className="flex max-w-max rounded-lg border border-border p-2">
                    <img src={bankSlip.src} />
                  </div>

                  <span className="font-normal text-slate-100 ">
                    Para vendas no{" "}
                    <span className="font-medium text-white">boleto,</span> até:
                  </span>
                </section>

                <span className="text-[2.5rem] font-semibold text-white">
                  D+1
                </span>
              </div>
            </CardRevealedPointer>

            <CardRevealedPointer>
              <div className=" flex w-full flex-col gap-6 rounded-xl p-6 md:w-[20rem]">
                <section className="flex items-center gap-4">
                  <div className="flex max-w-max rounded-lg border border-border p-2">
                    <img src={card.src} />
                  </div>

                  <span className="font-normal text-slate-100 ">
                    Para vendas no{" "}
                    <span className="font-medium text-white">cartão,</span> até:
                  </span>
                </section>

                <span className="text-[2.5rem] font-semibold text-white">
                  D+7
                </span>
              </div>
            </CardRevealedPointer>
          </div>
          {/* <section className="flex justify-center lg:justify-end">
            <GetStartedLink variant="button" />
          </section> */}
        </section>
        <section className="mt-20 flex w-full flex-col-reverse items-center gap-16  ">
          <div className="flex w-full justify-end md:w-1/2 ">
            <div
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(19, 31, 51, 0.60) 0%, rgba(19, 30, 49, 0.00) 100%)",
              }}
              className="flex h-[332px]  w-full flex-col items-center justify-center gap-6 border border-border  p-10"
            >
              <section className="flex items-end  gap-1.5">
                <h3 className=" font-inter text-7xl font-bold text-neutral-50 ">
                  6,5%
                </h3>
                <h6 className=" font-inter mb-1 text-lg font-bold text-neutral-50 ">
                  + R$ 1,39
                </h6>
              </section>

              <h4 className="text-[1.125rem] text-slate-100">
                Por transação aprovada
              </h4>
            </div>
          </div>

          <Fade right>
            <div className="flex w-full flex-col md:w-1/2">
              <h2 className="font-inter mt-4 text-center text-4xl font-semibold leading-[4.5rem] text-slate-100 ">
                Você só paga quando vender
              </h2>
              <h4 className="mt-4 text-center text-[1.125rem] text-slate-100 ">
                Sem taxas ocultas! Experimente a Meexpay e tenha uma experiência
                singular para você e seus clientes.
              </h4>
            </div>
          </Fade>
        </section>

        <Fade bottom>
          <section
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(19, 31, 51, 0.60) 0%, rgba(19, 30, 49, 0.00) 100%)",
            }}
            className="mt-32 flex flex-col items-center"
          >
            <section className="flex justify-center md:justify-start">
              <ButtonAnimatedBorder>FERAMENTAS</ButtonAnimatedBorder>
            </section>
            <h2 className="font-inter mt-8 text-center text-[2.5rem] font-semibold text-slate-100">
              Integrações de um jeito simples e rápido
            </h2>
            <h3 className="mt-4 max-w-[48rem] text-center text-[1.25rem] text-slate-100">
              Receba suas comissões sem impactar seu fluxo de caixa. Oferecemos
              condições ideais para garantir essa praticidade financeira.
            </h3>

            <div className="mt-8 flex w-full flex-col  items-center justify-center gap-6 md:flex md:flex-row">
              <CardRevealedPointer>
                <div className="flex w-full flex-col gap-6  rounded-xl p-6 placeholder:bg-background md:w-[10rem] lg:w-[16.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M0.552423 17.6124L8.52648 3.96094C9.53938 4.55727 14.647 7.38391 15.4719 7.92151L7.49782 21.5737C6.62576 22.7259 -0.552417 19.3608 0.552423 17.6117V17.6124Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M23.4632 17.612L15.4891 3.96142C14.3743 2.1062 11.9735 1.432 10.0014 2.52774C8.02939 3.62348 7.42894 5.98383 8.54372 7.9219L16.5178 21.5742C17.6326 23.4286 20.0335 24.1027 22.0056 23.007C23.8914 21.9112 24.578 19.4672 23.4632 17.6136V17.612Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M4.00279 23.5345C6.21347 23.5345 8.00558 21.7869 8.00558 19.6311C8.00558 17.4754 6.21347 15.7278 4.00279 15.7278C1.79211 15.7278 0 17.4754 0 19.6311C0 21.7869 1.79211 23.5345 4.00279 23.5345Z"
                      fill="#34A853"
                    />
                  </svg>

                  <h3 className="text-slate-100">Google ads</h3>
                </div>
              </CardRevealedPointer>
              <CardRevealedPointer>
                <div className="flex w-full flex-col gap-6  rounded-xl p-6 placeholder:bg-background md:w-[10rem] lg:w-[16.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_357_667)">
                      <path
                        d="M24 13C24 6.37262 18.6274 1 12 1C5.37262 1 0 6.37262 0 13C0 18.9895 4.38825 23.954 10.125 24.8542V16.4688H7.07812V13H10.125V10.3563C10.125 7.34875 11.9166 5.6875 14.6576 5.6875C15.9705 5.6875 17.3438 5.92188 17.3438 5.92188V8.875H15.8306C14.3399 8.875 13.875 9.80003 13.875 10.7491V13H17.2031L16.6711 16.4688H13.875V24.8542C19.6117 23.954 24 18.9896 24 13Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M16.6711 16.4688L17.2031 13H13.875V10.7491C13.875 9.79994 14.3399 8.875 15.8306 8.875H17.3438V5.92188C17.3438 5.92188 15.9705 5.6875 14.6575 5.6875C11.9166 5.6875 10.125 7.34875 10.125 10.3563V13H7.07812V16.4688H10.125V24.8542C10.7453 24.9514 11.3722 25.0002 12 25C12.6278 25.0002 13.2547 24.9514 13.875 24.8542V16.4688H16.6711Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_357_667">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.789062)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h3 className="text-slate-100">Facebook pixel</h3>
                </div>
              </CardRevealedPointer>
              <CardRevealedPointer>
                <div className="flex w-full flex-col gap-6  rounded-xl p-6 placeholder:bg-background md:w-[10rem] lg:w-[16.5rem]">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 290"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>TikTok</title>
                    <g>
                      <path
                        d="M189.720224,104.421475 C208.398189,117.766281 231.279538,125.618095 255.992548,125.618095 L255.992548,78.0872726 C251.315611,78.0882654 246.650588,77.6008156 242.074913,76.6318726 L242.074913,114.045382 C217.363889,114.045382 194.485518,106.193568 175.80259,92.8497541 L175.80259,189.846306 C175.80259,238.368905 136.447224,277.701437 87.902784,277.701437 C69.7897057,277.701437 52.9543216,272.228299 38.9691786,262.841664 C54.9309256,279.153859 77.1908018,289.273158 101.81744,289.273158 C150.364858,289.273158 189.72221,249.940626 189.72221,201.416041 L189.72221,104.421475 L189.720224,104.421475 Z M206.889179,56.4687254 C197.343701,46.0456391 191.076347,32.5757434 189.720224,17.6842019 L189.720224,11.5707278 L176.531282,11.5707278 C179.851103,30.497877 191.174632,46.6681056 206.889179,56.4687254 L206.889179,56.4687254 Z M69.6735517,225.606854 C64.3403943,218.617757 61.4583846,210.068027 61.4712906,201.277053 C61.4712906,179.084685 79.472186,161.090739 101.680438,161.090739 C105.819294,161.089747 109.933331,161.723134 113.877603,162.974023 L113.877603,114.380938 C109.268175,113.749536 104.616057,113.481488 99.9659254,113.579773 L99.9659254,151.402303 C96.0186741,150.151413 91.9026521,149.516041 87.7628035,149.520012 C65.5545513,149.520012 47.5546487,167.511972 47.5546487,189.707318 C47.5546487,205.401018 56.552118,218.98806 69.6735517,225.606854 Z"
                        fill="#FF004F"
                      ></path>
                      <path
                        d="M175.80259,92.8487613 C194.485518,106.192575 217.363889,114.044389 242.074913,114.044389 L242.074913,76.6308799 C228.281375,73.6942679 216.070311,66.4897401 206.889179,56.4687254 C191.173639,46.6671128 179.851103,30.4968842 176.531282,11.5707278 L141.8876,11.5707278 L141.8876,201.414056 C141.809172,223.545865 123.839052,241.466346 101.678453,241.466346 C88.6195635,241.466346 77.0180599,235.24466 69.6705734,225.606854 C56.5501325,218.98806 47.5526631,205.400025 47.5526631,189.708311 C47.5526631,167.51495 65.5525657,149.521004 87.760818,149.521004 C92.0158278,149.521004 96.1169583,150.183182 99.9639399,151.403295 L99.9639399,113.580765 C52.272289,114.565593 13.9166419,153.513923 13.9166419,201.415048 C13.9166419,225.326893 23.4680767,247.004014 38.9701714,262.842657 C52.9553144,272.228299 69.7906985,277.70243 87.9037768,277.70243 C136.449209,277.70243 175.803582,238.367912 175.803582,189.846306 L175.803582,92.8487613 L175.80259,92.8487613 Z"
                        fill="#000000"
                      ></path>
                      <path
                        d="M242.074913,76.6308799 L242.074913,66.5145593 C229.636505,66.5334219 217.442318,63.0517795 206.889179,56.4677326 C216.231139,66.6902795 228.532545,73.7389425 242.074913,76.6308799 Z M176.531282,11.5707278 C176.214589,9.76190185 175.971361,7.9411627 175.80259,6.11347418 L175.80259,0 L127.968973,0 L127.968973,189.845313 C127.89253,211.974144 109.923403,229.894625 87.760818,229.894625 C81.2542071,229.894625 75.1109499,228.350869 69.6705734,225.607847 C77.0180599,235.24466 88.6195635,241.465353 101.678453,241.465353 C123.837066,241.465353 141.810164,223.546857 141.8876,201.415048 L141.8876,11.5707278 L176.531282,11.5707278 Z M99.9659254,113.580765 L99.9659254,102.811203 C95.9690357,102.265179 91.9393845,101.991175 87.9047695,101.99315 C39.3553659,101.99315 0,141.326686 0,189.845313 C0,220.263769 15.4673478,247.071522 38.9711641,262.840672 C23.4690694,247.003021 13.9176347,225.324907 13.9176347,201.414056 C13.9176347,153.513923 52.272289,114.565593 99.9659254,113.580765 Z"
                        fill="#00F2EA"
                      ></path>
                    </g>
                  </svg>

                  <h3 className="text-slate-100">Tiktok pixel</h3>
                </div>
              </CardRevealedPointer>
            </div>
          </section>
        </Fade>

        <Footer />
      </div>
    </main>
  );
}
