import React, { ChangeEvent, ReactElement } from "react";
import { PLATFORMS, GENRES, TAGS, SORT } from "./const";
import { Form, Label, Select } from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

// GameFilter component
const GameFilter = ({ onChange }: Props): ReactElement => {
  return (
    <Form onChange={onChange}>
      {/* platform select */}
      <Label htmlFor="platform-select">
        Platform:
        <Select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </Label>
      {/* genre select */}
      <Label htmlFor="genre-select">
        Genre:
        <Select name="genre" id="genre-select">
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </Select>
      </Label>
      {/* tag select */}
      <Label htmlFor="tag-select">
        Tag:
        <Select name="tag" id="tag-select">
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </Select>
      </Label>
      {/* sort select */}
      <Label htmlFor="sort-select">
        Sort:
        <Select name="sort" id="sort-select">
          {SORT.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.display}
            </option>
          ))}
        </Select>
      </Label>
    </Form>
  );
};

export default GameFilter;
