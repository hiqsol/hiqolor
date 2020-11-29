<?php
declare(strict_types=1);

namespace hiqolor\Renderers;

class KonsoleRenderer extends AbstractRenderer
{
    public function getName(): string
    {
        return 'Konsole';
    }
}
