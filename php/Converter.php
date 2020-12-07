<?php
declare(strict_types=1);

namespace hiqolor;

use hiqolor\Parsers\ParserFactory;
use hiqolor\Renderers\RendererFactory;

class Converter
{
    public function convert(string $src = null, string $dst = null): void
    {
        $text = $this->read($src);

        $detector = new Detector();
        $inputFormat = $detector->detect($src, $text);
        $outputFormat = $detector->detect($dst);

        $parser = (new ParserFactory())->get($inputFormat);
        $renderer = (new RendererFactory())->get($outputFormat);

        $scheme = $parser->parse($text);
        if (empty($scheme->name)) {
            $scheme->name = $detector->extractName($src);
        }
        $output = $renderer->render($scheme);

        $this->write($dst, $output);
    }

    private function read(string $src): string
    {
        if (empty($src)) {
            $src = 'php://stdin';
        }
        return file_get_contents($src);
    }

    private function write(string $dst = null, string $data): void
    {
        if (empty($dst)) {
            echo $data;
        } else {
            file_put_contents($dst, $data);
        }
    }
}
