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


    static public function fromMixed($data): self
    {
        return is_array($data) ? self::fromArray($data) : self::fromString((string)$data);
    }

    static public function fromString(string $str): self
    {
        return new self(ariColor::newColor($str));
    }

    static public function fromArray(array $arr): self
    {
        return new self(ariColor::newColor($arr));
    }

    public function getHex(): string
    {
        return $this->color->hex;
    }
}
