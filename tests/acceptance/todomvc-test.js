import { test, module } from 'qunit';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, triggerKeyEvent, click } from '@ember/test-helpers';

module('TodoMVC', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    window.localStorage.clear();
    await visit('/');
  });

  test('Loads the app 9', async function (assert) {
    assert.dom('section.todoapp').exists();
    await percySnapshot(assert);
  });

  test('Accepts a new todo 9', async function (assert) {
    await fillIn('.new-todo', 'New fancy todo');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-list').exists({ count: 1 });

    await percySnapshot('Snapshot with new todo', { widths: [300] });
  });

  test('Lets you check off a todo 9', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });

  test('Lets you check off a todo 10', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });

  test('Lets you check off a todo 12', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });

  test('Lets you check off a todo 13', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 14', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 15', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 16', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 17', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 18', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 19', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 20', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 21', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 22', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 23', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 24', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 25', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 26', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 27', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 28', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 29', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 30', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 31', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 32', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 33', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 34', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 35', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 36', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 37', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 38', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 39', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 40', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 41', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 42', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 43', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 44', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 45', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 46', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 47', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 48', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 49', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 50', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 51', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 52', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 53', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 54', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 55', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 56', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 57', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 58', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 59', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 60', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 61', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 62', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 63', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 64', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 65', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 66', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 67', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 68', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 69', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 70', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 71', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 72', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 73', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 74', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 75', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 76', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 77', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 78', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 79', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 80', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 81', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 82', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 83', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 84', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 85', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 86', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 87', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 88', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 89', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 90', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 91', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 92', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 93', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 94', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 95', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 96', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 97', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 98', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 99', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 100', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 101', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 102', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 103', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 104', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 105', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 106', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 107', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 108', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 109', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 110', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 111', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 112', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 113', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 114', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 115', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 116', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 117', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 118', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 119', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 120', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 121', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 122', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 123', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 124', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 125', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 126', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 127', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 128', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 129', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 130', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 131', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 132', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 133', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 134', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 135', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 136', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 137', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 138', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 139', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 140', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 141', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 142', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 143', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 144', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 145', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 146', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 147', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 148', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 149', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 150', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 151', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 152', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 153', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 154', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
  test('Lets you check off a todo 155', async function (assert) {
    await fillIn('.new-todo', 'A thing to accomplish');
    await triggerKeyEvent('.new-todo', 'keyup', 13);

    assert.dom('.todo-count').hasText('1 item left');

    await click('input.toggle');

    assert.dom('.todo-count').hasText('0 items left');

    await percySnapshot(assert, { widths: [768, 992, 1200] });
  });
});
