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

    public function getHex(): string { return $this->color->hex; }
    public function getRed(): string { return (string)$this->color->red; }
    public function getGreen(): string { return (string)$this->color->green; }
    public function getBlue(): string { return (string)$this->color->blue; }

    public function getHue  (): string { return (string)$this->color->hue; }
    public function getHue3r(): string { return $this->align3r($this->getHue()); }
    public function getHue3l(): string { return $this->align3l($this->getHue()); }

    public function getSat(): string { return (string)$this->color->saturation; }
    public function getSat3r(): string { return $this->align3r($this->getSat()); }
    public function getSat3l(): string { return $this->align3l($this->getSat()); }

    public function getVal(): string { return (string)$this->color->lightness; }
    public function getVal3r(): string { return $this->align3r($this->getVal()); }
    public function getVal3l(): string { return $this->align3l($this->getVal()); }

    public function align3l(string $v): string { return sprintf('%-3s', $v); }
    public function align3r(string $v): string { return sprintf('%3s', $v); }
}
