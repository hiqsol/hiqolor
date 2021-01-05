<?php
declare(strict_types=1);

namespace hiqolor;

/**
 * @author Andrii Vasyliev <sol@hiqdev.com>
 */
class Scheme
{
    public string $name;

    private array $colors = [
        'foreground'    => null,
        'background'    => null,
        'color0'        => null,
        'color1'        => null,
        'color2'        => null,
        'color3'        => null,
        'color4'        => null,
        'color5'        => null,
        'color6'        => null,
        'color7'        => null,
        'color8'        => null,
        'color9'        => null,
        'color10'       => null,
        'color11'       => null,
        'color12'       => null,
        'color13'       => null,
        'color14'       => null,
        'color15'       => null,
    ];

    public function has($key): bool
    {
        return !empty($this->colors[$key]);
    }

    public function setAll(array $colors): self
    {
        foreach ($colors as $no => $color) {
            $this->set($no, $color);
        }

        return $this;
    }

    public function set($key, $color): self
    {
        $key = $this->normalizeKey($key);
        $color = $this->normalizeColor($color);
        $this->colors[$key] = $color;
        return $this->setAliases($key, $color);
    }

    public function setAliases(string $key, Color $color)
    {
        $aliases = [
            'foreground' => 'cursorColor',
        ];
        $alias = $aliases[$key] ?? null;
        if ($alias && !$this->has($alias)) {
            $this->set($alias, $color);
        }

        return $this;
    }

    public function getAll(): array
    {
        return $this->colors;
    }

    public function get($key): ?Color
    {
        return $this->colors[$this->normalizeKey($key)] ?? null;
    }

    public function normalizeColor($color): Color
    {
        return $color instanceof Color ? $color : Color::fromMixed($color);
    }

    public function normalizeKey($key): string
    {
        if (array_key_exists($key, $this->colors)) {
            return $key;
        }
        $color = "color$key";
        if (array_key_exists($color, $this->colors)) {
            return $color;
        }

        return $key;
    }
}
