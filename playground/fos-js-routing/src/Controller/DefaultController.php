<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'welcome')]
    public function welcome(): Response
    {
        return $this->render('default/welcome.html.twig', [
            'currentPage' => 'welcome',
        ]);
    }

    #[Route('/other', name: 'other')]
    public function other(): Response
    {
        return $this->render('default/other.html.twig', [
            'currentPage' => 'other',
        ]);
    }
}
