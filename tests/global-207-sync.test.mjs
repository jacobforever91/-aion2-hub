import test from 'node:test';
import assert from 'node:assert/strict';
import chest from '../app/equipment/chestData.js';
import armor from '../app/equipment/armorMoreData.js';
import jewelry from '../app/equipment/jewelryData.js';

const stat=(item,label)=>item?.stats?.find(row=>row.label===label)?.value;
const get=(rows,id)=>{
  const item=rows.find(x=>x.id===id);
  assert.ok(item,'missing item '+id);
  return item;
};

test('Global 2.0.7 sync corrects True Dragon Lord chest base defense',()=>{
  assert.equal(stat(get(chest,'210130108'),'Defense'),'457');
  assert.equal(stat(get(chest,'210130015'),'Defense'),'457');
  assert.equal(stat(get(chest,'210130110'),'Defense'),'517');
  assert.equal(stat(get(chest,'210130017'),'Defense'),'517');
});

test('Global 2.0.7 sync corrects True Dragon Lord greaves base defense',()=>{
  assert.equal(stat(get(armor,'210230015'),'Defense'),'381');
  assert.equal(stat(get(armor,'210230017'),'Defense'),'431');
});

test('Global 2.0.7 sync corrects True Dragon Lord jewelry base stats',()=>{
  const expected={
    '310330015':['63','152'],'310330111':['63','152'],
    '310330017':['72','172'],'310330113':['72','172'],
    '310230015':['79','190'],'310230111':['79','190'],
    '310230017':['90','216'],'310230113':['90','216'],
    '310130015':['95','228'],'310130109':['95','228'],
    '310130017':['108','259'],'310130111':['108','259']
  };
  for(const [id,[attack,defense]] of Object.entries(expected)){
    const item=get(jewelry,id);
    assert.equal(stat(item,'Attack'),attack,id+' Attack');
    assert.equal(stat(item,'Defense'),defense,id+' Defense');
  }
});
