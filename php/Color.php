<?php
declare(strict_types=1);

namespace hiqolor;

use ariColor;

class Color
{
    private $color;

    public function __construct(ariColor $color)
    {
        $this->color = $color;
    }

    static public function fromString(string $str): self
    {
        return new self(ariColor::newColor($str));
    }
    public function getHex(): string
    {
        return $this->color->hex;
    }
}
