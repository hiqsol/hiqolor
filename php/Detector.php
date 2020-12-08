<?php
declare(strict_types=1);

namespace hiqolor;

class Detector
{
    private array $types = [
        'colorscheme'   => 'Konsole',
        'colortable'    => 'ColorTable',
        'css'           => 'Css',
        'xresource'     => 'Xresource',
    ];

    public function detect(string $path = null, string $text = null): string
    {
        $parts = pathinfo($path ?? '');
        $ext = $parts['extension'] ?? null ?: $parts['basename'];
        return $this->types[$ext] ?? 'Xresource';
    }

    public function extractName(string $path = null): string
    {
        $parts = pathinfo($path ?? '');
        return $parts['filename'] ?? null;
    }
}
