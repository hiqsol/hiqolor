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
        $res = [
            "{{ name }}" => $scheme->name,
        ];
        foreach ($scheme->getAll() as $key => $color) {
            if ($color === null) {
                var_dump(__FILE__ . ':' . __LINE__ . ' ' . __METHOD__, $key);die;
            }
            $res["{{ $key.hex }}"]      = $color->getHex();
            $res["{{ $key.red }}"]      = $color->getred();
            $res["{{ $key.green }}"]    = $color->getGreen();
            $res["{{ $key.blue }}"]     = $color->getBlue();
            $res["{{ $key.hue }}"]      = $color->getHue();
            $res["{{ $key.hue3r }}"]    = $color->getHue3r();
            $res["{{ $key.hue3l }}"]    = $color->getHue3l();
            $res["{{ $key.sat }}"]      = $color->getSat();
            $res["{{ $key.sat3r }}"]    = $color->getSat3r();
            $res["{{ $key.sat3l }}"]    = $color->getSat3l();
            $res["{{ $key.val }}"]      = $color->getVal();
            $res["{{ $key.val3r }}"]    = $color->getVal3r();
            $res["{{ $key.val3l }}"]    = $color->getVal3l();
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
