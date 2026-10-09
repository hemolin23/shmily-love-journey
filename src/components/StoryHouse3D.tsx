import {useEffect, useRef, useState} from 'react';
import type {HouseRoomId} from '../data/house-story';
import {mountStoryHouse, type StoryHouseController} from '../three/story-house-engine';

interface StoryHouse3DProps {
  selected: HouseRoomId | null;
  visited: HouseRoomId[];
  onSelect: (id: HouseRoomId) => void;
}

export function StoryHouse3D({selected, visited, onSelect}: StoryHouse3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<StoryHouseController | null>(null);
  const selectRef = useRef(onSelect);
  const [ready, setReady] = useState(false);
  const [hovered, setHovered] = useState('');

  selectRef.current = onSelect;

  useEffect(() => {
    if (!mountRef.current) return;
    const controller = mountStoryHouse(mountRef.current, {
      onReady: () => setReady(true),
      onHover: setHovered,
      onSelect: (id) => selectRef.current(id),
    });
    controllerRef.current = controller;
    return () => {
      controller.dispose();
      controllerRef.current = null;
    };
  }, []);

  useEffect(() => {
    controllerRef.current?.sync({selected, visited});
  }, [selected, visited]);

  return (
    <div className="story-house-canvas-wrap" aria-label="六个房间组成的恋爱记忆空间">
      <div ref={mountRef} className="story-house-canvas" />
      {!ready && <div className="story-house-loading">正在点亮这所房子…</div>}
      <div className={'story-house-hover ' + (hovered ? 'is-visible' : '')}>{hovered}</div>
      <div className="story-house-controls-hint">拖动观看 · 滚轮远近 · 点击房间</div>
    </div>
  );
}
