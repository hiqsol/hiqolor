<?php
declare(strict_types=1);

namespace hiqolor\Renderers;

use hiqolor\Scheme;

interface RendererInterface
{
    public function render(Scheme $scheme): string;
}
