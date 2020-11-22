<?php
declare(strict_types=1);

namespace hiqolor\Renderers;

class RendererFactory
{
    public function get(string $type): RendererInterface
    {
        $class = __NAMESPACE__ . "\\{$type}Renderer";
        return new $class();
    }
}
