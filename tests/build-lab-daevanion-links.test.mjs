import test from 'node:test';
import assert from 'node:assert/strict';
import {variant} from '../public/build-lab-assets/model.mjs';
import {daevanionSkillLinks} from '../public/build-lab-assets/review-model.mjs';

const catalog={
  classes:[{slug:'gladiator',name:'Gladiator',skills:[
    {id:'11340000',name:'Lifestealing Blade',type:'stigma'},
    {id:'11010000',name:"Veteran's Counterstrike",type:'active'}
  ]}],
  boards:{
    Gladiator:{
      Nezekan:[
        [8,8,'Nezekan - Start','Start',0,1],
        [8,9,'Skill Level Up - Lifestealing Blade','Rare',2,0],
        [8,10,"Skill Level Up - Veteran’s Counterstrike",'Rare',2,0],
        [8,11,'Attack','Common',1,0]
      ]
    }
  }
};

test('selected Daevanion skill nodes link to class skills without inventing an amount',()=>{
  const v=variant();
  v.classSlug='gladiator';
  v.skills={'11340000':{level:10,spec:{}}};
  v.paths={Nezekan:['8,9','8,10','8,11']};
  const links=daevanionSkillLinks(v,catalog);
  assert.equal(links.length,2);
  assert.equal(links[0].skillId,'11340000');
  assert.equal(links[0].selectedInBuild,true);
  assert.equal(links[1].skillId,'11010000');
  assert.equal(links[1].selectedInBuild,false);
  assert.equal(Object.hasOwn(links[0],'bonus'),false);
  assert.equal(Object.hasOwn(links[0],'levels'),false);
});

test('Daevanion skill-name matching tolerates apostrophe variants only',()=>{
  const v=variant();
  v.classSlug='gladiator';
  v.paths={Nezekan:['8,10']};
  const [link]=daevanionSkillLinks(v,catalog);
  assert.equal(link.skillName,'Veteran’s Counterstrike');
  assert.equal(link.skillId,'11010000');
  assert.equal(link.matched,true);
});

test('unselected Daevanion nodes do not create links',()=>{
  const v=variant();
  v.classSlug='gladiator';
  v.paths={Nezekan:['8,11']};
  assert.deepEqual(daevanionSkillLinks(v,catalog),[]);
});
