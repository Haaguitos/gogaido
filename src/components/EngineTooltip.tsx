"use client";

import { Icons } from "@/assets";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";

export function EngineTooltip() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="group flex relative items-center cursor-pointer">
            <Icons.QuestionCircle className="[&>circle]:stroke-gray-300 [&>path]:fill-gray-300 group-hover:[&>circle]:stroke-primary-100 group-hover:[&>path]:fill-primary-100" />
          </div>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            className="TooltipContent"
            sideOffset={24}
            side="right"
            align="start"
            alignOffset={-16}
          >
            <div className="flex flex-col w-64 gap-4 bg-gray-50 p-6 rounded-2xl dark:bg-gray-500">
              <p className="text-sm text-gray-300">
                <b className="dark:text-gray-200">SVM</b> usa Machine Learning
                para classificar os animes exibidos em categorias ou grupos. Ele
                é treinado em tempo real no momento da busca.
              </p>

              <p className="text-sm text-gray-300">
                <b className="dark:text-gray-200">KNN</b> é um algoritmo que
                utiliza a proximidade entre as características dos animes
                exibidos. É uma opção mais simples e rápida do que o SVM.
              </p>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
