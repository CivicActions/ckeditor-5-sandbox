<?php

namespace Drupal\cke5_helpdrawer_plugin\Controller;

use Drupal\Component\Utility\Xss;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\Element\EntityAutocomplete;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\taxonomy\Entity\Term;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class HelpDrawerController extends ControllerBase {

  /**
   * The entity type manager.
   *
   * @var EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * @param EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager service.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * Handles the autocomplete function for tooltip selection.
   *
   * @param Request $request
   * @return JsonResponse
   */
  public function handleAutocomplete(Request $request) {
    $results = [];

    $input = $request->query->get('q');
    if (!$input) {
      return new JsonResponse($results);
    }

    $input = Xss::filter($input);
    $query = $this->entityTypeManager->getStorage('taxonomy_term')->getQuery()
      ->accessCheck(TRUE)
      ->condition('vid', 'dogs')
      ->condition('name', $input, 'CONTAINS')
      ->condition('status', 1)
      ->sort('name', 'ASC')
      ->range(0, 10);
    $ids = $query->execute();
    $terms = $ids ? Term::loadMultiple($ids) : [];
    foreach ($terms as $term) {
      $results[] = [
        'value' => EntityAutocomplete::getEntityLabels([$term]),
        'label' => $term->getName(),
        'id' => $term->id(),
      ];
    }

    return new JsonResponse($results);
  }
}
