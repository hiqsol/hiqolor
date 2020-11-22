<?php
declare(strict_types=1);

namespace hiqolor;

class Detector
{
    public function detect(string $path = null, string $text = null): string
    {
        $parts = pathinfo($path ?? '');
        $ext = $parts['extension'] ?? null ?: $parts['basename'];
        return $types[$ext] ?? 'Xresource';
    }
}
