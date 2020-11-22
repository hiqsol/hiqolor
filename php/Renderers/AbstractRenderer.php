<?php
declare(strict_types=1);

namespace hiqolor\Renderers;

use hiqolor\Scheme;

abstract class AbstractRenderer implements RendererInterface
{
    abstract public function getName(): string;

    public function render(Scheme $scheme): string
    {
        $tpl = $this->getTemplate();
        $vars = $this->prepareVars($scheme);
        return strtr($tpl, $vars);
    }

    private function prepareVars(Scheme $scheme): array
    {
        $res = [];
        foreach ($scheme->getAll() as $key => $color) {
            $res["{{ $key.hex }}"] = $color->getHex();
        }
        return $res;
    }

    private function getTemplate(): string
    {
        $name = $this->getName();
        $path = dirname(__DIR__, 2) . "/templates/$name.tpl";
        return file_get_contents($path);
    }
}
